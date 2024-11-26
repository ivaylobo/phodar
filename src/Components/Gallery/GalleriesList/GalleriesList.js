import React from "react";
import {useParams} from "react-router-dom";
import {useState, useEffect, Fragment} from "react";
import Galleries from "../Galleries";
import InfiniteScroll from "react-infinite-scroll-component";
import translate from "../../../i18n/translate";
import WinnersList from "../WinnersList/WinnersList";
import ParticipantsList from "../ParticipantsList/ParticipantsList";

const GalleriesList = () => {
    const {edition} = useParams();
    const [itemsCount] = useState(2);
    const [winners, setWinners] = useState({allAuthors: [], authors: [], step: 0, scrollEnded: false});
    const [participants, setParticipants] = useState({allAuthors: [], authors: [], step: 0, scrollEnded: false});
    const [guests, setGuests] = useState({allAuthors: [], authors: [], step: 0, scrollEnded: false});

    const fetchAuthors = (type, setState, state) => {
        if (state.scrollEnded) return;
        const count = type === 'winners' ? itemsCount : itemsCount * 2;
        const start = count * (state.step + 1);
        const nextStep = start + count;
        const end = nextStep < state.allAuthors.length ? nextStep : state.allAuthors.length;

        setState(prev => ({
            ...prev,
            authors: prev.authors.concat(prev.allAuthors.slice(start, end)),
            step: prev.step + 1,
            scrollEnded: end === prev.allAuthors.length,
        }));
    };

    const getDataForEdition = () => {
        const allEditions = Galleries.map(edition => edition.year);
        const currentYear = allEditions.includes(+edition) ? edition : Galleries[Galleries.length - 1].year;
        const currentEdition = Galleries.find(ed => +currentYear === ed.year);

        const winners = [], participants = [], guests = [];
        currentEdition.authors.sort((a, b) => a.level - b.level).forEach(author => {
            const isWinner = author.award && author.urls.length;
            const isParticipant = !author.award && author.level <= 10 && author.urls.length;
            const isGuest = !author.award && author.level > 10 && author.urls.length;

            if (isWinner) winners.push(author);
            else if (isParticipant) participants.push(author);
            else if (isGuest) guests.push(author);
        });

        setWinners({allAuthors: winners, authors: winners.slice(0, itemsCount), step: 0, scrollEnded: false});
        setParticipants({
            allAuthors: participants,
            authors: participants.slice(0, itemsCount * 2),
            step: 0,
            scrollEnded: false
        });
        setGuests({allAuthors: guests, authors: guests.slice(0, itemsCount * 2), step: 0, scrollEnded: false});
    };

    useEffect(() => {
        getDataForEdition();
    }, [edition]);

    return (
        <Fragment>
            <div className="allSeries">
                <div className="winners">
                    <h2><span>{translate({id: 'Series winners'})}</span> {edition}</h2>
                    <InfiniteScroll
                        next={() => fetchAuthors('winners', setWinners, winners)}
                        hasMore={!winners.scrollEnded}
                        loader={<div className="loader">Loading...</div>}
                        dataLength={winners.authors.length}
                    >
                        <WinnersList
                            winners={winners.authors}
                            allWinnersLength={winners.allAuthors.length}
                            edition={edition}
                        />
                    </InfiniteScroll>
                </div>
            </div>

            {participants.authors.length > 0 && winners.scrollEnded === true && (
                <div className="jury">
                    <h2>{translate({id: 'participants in the exhibition'})}</h2>
                    <InfiniteScroll
                        next={() => fetchAuthors('participants', setParticipants, participants)}
                        hasMore={!participants.scrollEnded}
                        loader={<div className="loader">Loading...</div>}
                        dataLength={participants.authors.length}
                    >
                        <ParticipantsList
                            participants={participants.authors}
                            allParticipantsLength={participants.allAuthors.length}
                            edition={edition}
                        />
                    </InfiniteScroll>
                </div>
            )}

            {guests.authors.length > 0 && (
                <div className="jury">
                    <h2>{translate({id: 'Concomitant exhibitions'})}</h2>
                    <InfiniteScroll
                        next={() => fetchAuthors('guests', setGuests, guests)}
                        hasMore={!guests.scrollEnded}
                        loader={<div className="loader">Loading...</div>}
                        dataLength={guests.authors.length}
                    >
                        <ParticipantsList
                            participants={guests.authors}
                            allParticipantsLength={guests.allAuthors.length}
                            edition={edition}
                        />
                    </InfiniteScroll>
                </div>
            )}
        </Fragment>
    );
}

export default GalleriesList
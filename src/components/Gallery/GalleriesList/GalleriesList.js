import React, {Component, Fragment} from "react";
import Galleries from "../Galleries";
import InfiniteScroll from 'react-infinite-scroll-component';
import WinnersList from "./WinnersList/WinnersList";
import translate from "../../../i18n/translate";
import ParticipantsList from "./ParticipantsList/ParticipantsList"

class GalleriesList extends Component {

	state = {
		itemsCount: 2, // how many winners will be shown, before to load next in infinite scroll
		winners: {
			allAuthors: [],
			authors: [],
			step: 0,
			scrollEnded: false
		},
		guests: {
			allAuthors: [],
			authors: [],
			step: 0,
			scrollEnded: false
		},
		participants: {
			allAuthors: [],
			authors: [],
			step: 0,
			scrollEnded: false
		}
	}


	fetchAuthors = (type) => {
		if ((type === 'winners' && this.state.winners.scrollEnded) ||
			(type === 'participants' && this.state.participants.scrollEnded) ||
			(type === 'guests' && this.state.guests.scrollEnded)
		) {

			return
		}

		const itemsCount = type === 'winners' ? this.state.itemsCount : this.state.itemsCount * 2; // if it's not winners, we have less photos and we show more items on step
		const authorsStep = this.state[type].step + 1;
		const start = itemsCount * authorsStep;
		const nextStep = start + itemsCount;
		const end = nextStep < this.state[type].allAuthors.length ? nextStep : this.state[type].allAuthors.length;
		const lastStep = this.state[type].allAuthors.length === end;
		const typeInState = {
			authors: this.state[type].authors.concat(this.state[type].allAuthors.slice(start, end)),
			step: authorsStep,
			scrollEnded: lastStep,
			allAuthors: this.state[type].allAuthors
		}


		this.setState({
			[type]: typeInState,
		})

	}


	getDataForEdition = () => {
		const allEditions = Galleries.map(edition => edition.year)
		const editionYear  = allEditions.includes(+this.props.match.params.edition) ? this.props.match.params.edition : Galleries[Galleries.length - 1].year;
		const currentEdition = Galleries.find((edition) => +editionYear === edition.year);

		const winners = [];
		const participants = [];
		const guests = [];


		currentEdition.authors.sort((a, b) => (a.level > b.level) ? 1 : -1).map(author => {

			const winnerCondition = author.award && author.award !== '' && author.urls.length > 0;
			const participantCondition = (!author.award || author.award === '') && author.level <= 10 && author.urls.length > 0;
			const guestCondition = (!author.award || author.award === '') && author.level > 10 && author.urls.length

			if (winnerCondition) {
				winners.push(author)
			} else if (participantCondition) {
				participants.push(author)
			} else if (guestCondition) {
				guests.push(author)
			}
			return false;

		})

		this.setState({
			winners: {
				allAuthors: winners,
				authors: winners.slice(0, this.state.itemsCount),
				step: 0,
				scrollEnded: false
			},
			guests: {
				allAuthors: guests,
				authors: guests.slice(0, this.state.itemsCount * 2), // showing more guests on each step, since you have 2 authors on a roll
				step: 0,
				scrollEnded: false
			},
			participants: {
				allAuthors: participants,
				authors: participants.slice(0, this.state.itemsCount * 2), // showing more participants on each step, since you have 2 authors on a roll
				step: 0,
				scrollEnded: false
			}
		})
	}

	componentDidMount() {
		this.getDataForEdition()
	}


	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.match.params.edition !== this.props.match.params.edition) {
			this.getDataForEdition()
		}
	}

	render() {

		const edition = this.props.match.params.edition ? this.props.match.params.edition : this.props.lastEdition

		return (
			<Fragment>
				<div className="allSeries">
					<div className="winners">
						<h2><span>{translate('Series winners')}</span> {this.props.match.params.edition}</h2>
						<InfiniteScroll next={() => this.fetchAuthors('winners')} hasMore={!this.state.winners.scrollEnded}
										loader={<div className="loader">Loading...</div>}
										dataLength={this.state.winners.authors.length}>
							{<WinnersList winners={this.state.winners.authors}
										  allWinnersLength={this.state.winners.allAuthors.length}
										  edition={edition}
							/>}
						</InfiniteScroll>
					</div>
				</div>
				{this.state.participants.authors.length > 0 ?
					(<div className="jury">
						<h2>{translate('participants in the exhibition')}</h2>
						<div className="container">
							<div className="row">
								<InfiniteScroll next={() => this.fetchAuthors('participants')} hasMore={!this.state.participants.scrollEnded}
												loader={<div className="loader">Loading...</div>}
												dataLength={this.state.participants.authors.length}>
									{<ParticipantsList participants={this.state.participants.authors}
													   allParticipantsLength={this.state.participants.allAuthors.length}
													   edition={edition}
									/>}
								</InfiniteScroll>
							</div>
						</div>
					</div>) : null
				}

				{this.state.guests.authors.length ?
					(<div className="jury">
						<h2>{translate('Concomitant exhibitions')}</h2>
						<div className="container">
							<div className="row">
								<InfiniteScroll next={() => this.fetchAuthors('guests')} hasMore={!this.state.guests.scrollEnded}
												loader={<div className="loader">Loading...</div>}
												dataLength={this.state.guests.authors.length}>
									{<ParticipantsList participants={this.state.guests.authors}
													   allParticipantsLength={this.state.participants.allAuthors.length}
													   edition={edition}
									/>
									}
								</InfiniteScroll>
							</div>
						</div>
					</div>) : null
				}
			</Fragment>

		)
	}
}

export default GalleriesList
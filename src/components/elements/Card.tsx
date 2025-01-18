import { CardType } from '../../types/types'

type Props = {
    cardData: CardType,
}
function Card({ cardData }: Props) {
    return (
        <div className="card_wrap">
            <div
                key={cardData.name}
                className={`card card_${cardData.name}`}
                id={cardData.name}>
                <div className="card_inner">
                    <section className="card_info">
                        <h1 className="card_title">{cardData.title}</h1>
                        <h3 className="card_subtitle">{cardData.subtitle}</h3>
                        <p className="card_desc">{cardData.description}</p>
                    </section>
                </div>
            </div>
        </div >
    );
}

export default Card;

import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Params = () => { 
    const facts = [
        { id: 1, fact: `The Boy Who Lived: Harry is famous in the wizarding world as "The Boy Who Lived" after surviving an attack by the dark wizard Voldemort when he was a baby. This incident left him with a lightning-shaped scar on his forehead and made him a symbol of hope against dark forces.` },
        { id: 2, fact: `Friendship and Loyalty: Throughout the series, Harry's friendships with Hermione Granger and Ron Weasley are central to the story. Their loyalty to each other helps them face numerous challenges, emphasizing the importance of friendship and support in overcoming adversity.` },
        { id: 3, fact: `Struggle Against Evil: Harry’s journey is marked by his struggle against Voldemort and his followers, known as Death Eaters. As he grows from a young boy into a powerful wizard, he learns about sacrifice, bravery, and the complexities of good and evil, ultimately leading the fight to protect the wizarding world.` }
    ];

    const { id } = useParams();
    const faqti = facts.find(faqti => faqti.id === Number(id));

    if (!faqti) {
        return <ErrorPage />;
    }

    return (
        <div>
            <h1>{faqti.fact}</h1>
        </div>
    );
}

export default Params;

import React, { Component  } from "react";
import './style.css';
import TopicHeader from './TopicHeader';
import TopicCard from './TopicCard';

export default class EvaluationTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicsWasScrolled: []
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
  
  trackScrolling = () => {
    // checking every topic if it was scrolled
    topics.map( topic => {
      const wrappedElement = document.getElementById(`topic-${topic.id}`);
      const isElementBottom = wrappedElement.getBoundingClientRect().bottom <= window.innerHeight;

      // if user scrolled to the topic`s bottom we need to add topic id to arr for
      // tracking users reading progress 
      if(isElementBottom) {
        this.setState( ({topicsWasScrolled}) => {
          if(!topicsWasScrolled.includes(topic.id)) {
            return{
              topicsWasScrolled: [...topicsWasScrolled, topic.id]
            }
          } 
        })
      } else { // if user scroll page up and lose sight of topic, we have to remove it`s id from progress arr
        this.setState( ({topicsWasScrolled}) => {
          if(topicsWasScrolled.includes(topic.id)) {
            return{
              topicsWasScrolled: topicsWasScrolled.filter(id => id !== topic.id)
            }
          }
        })
      }
    })
    this.changeScrollProgress()
  };

  changeScrollProgress = () => {
    const { topicsWasScrolled } = this.state;
    const scrolledTopicsNumber = topicsWasScrolled.length;

    // TODO: think how to rewrite
    let scrollProgress = 
    scrolledTopicsNumber === 0 ? 0 :
    scrolledTopicsNumber === 1 ? 13 :
    scrolledTopicsNumber === 2 ? 31 :
    scrolledTopicsNumber === 3 ? 50 :
    scrolledTopicsNumber === 4 ? 69 :
    scrolledTopicsNumber === 5 ? 87 : 100;

    this.props.setScrollProgress(scrollProgress)
  }

  render() {
    const { handleCardClick } = this.props;
    
    return(
      <div>
        {
          topics.map((topic, i) =>
            <div key={i} className='topic-element' id={`topic-${topic.id}`}>

              <TopicHeader topic={topic}/>

              <div className='topic-cards'>
                {
                  topic.cards.map((card, i) => <TopicCard key={i} card={card} topic={topic} handleCardClick={handleCardClick}/>)
                }
              </div>

            </div> 
          )
        }
      </div>
    );
  }
}

const topics = [{
  "id": "1",
  "number": "1",
  "title": "Choose the medium",
  "text": "Find out the difference in our examples by hovering the cursor.",
  "cards" : [
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "3D Animation",
    },
    {
      "cardNumber": "2.0",
      "price": "500",
      "cardText": "2D Animation",
    },
    {
      "cardNumber": "3.0",
      "price": "500",
      "cardText": "Editing / Motion Graphics",
    },
    {
      "cardNumber": "4.0",
      "price": "500",
      "cardText": "Live Action Production",
    },
    {
      "cardNumber": "5.0",
      "price": "500",
      "cardText": "Foreign Language",
    },
    {
      "cardNumber": "6.0",
      "price": "500",
      "cardText": "Characters",
    },
    {
      "cardNumber": "7.0",
      "price": "500",
      "cardText": "Style hybrid",
    }
  ]
},
{
  "id": "2",
  "number": "2",
  "title": "Choose the style",
  "text": "How does the price change? Some styles take more time to produce = higher price.",
  "cards" : [
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    }
  ]
},
{
  "id": "3",
  "number": "3",
  "title": "Duration",
  "text": "Find a time that suits your animation idea.",
  "cards" : [
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    }
  ]
},
{
  "id": "4",
  "number": "4",
  "title": "Timeframe",
  "text": "Do you have a particular time frame in mind?",
  "cards" : [
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    }
  ]
},
{
  "id": "5",
  "number": "5",
  "title": "Production Quality",
  "text": "Choose Quality",
  "cards" : [
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    }
  ]
},
{"id": "6",
  
  "number": "6",
  "title": "Additional Options",
  "text": "Choose Additional Options",
  "cards" : [
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    },
    {
      "cardNumber": "1.0",
      "price": "500",
      "cardText": "1.0",
    }
  ]
},
]
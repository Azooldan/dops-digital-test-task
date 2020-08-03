import React, { Component  } from "react";
import './style.css';
import TopicHeader from './TopicHeader';
import TopicCard from './TopicCard';
import TopicSlider from './TopicSlider';
import TopicQualitySelect from "./TopicQualitySelect";


export default class EvaluationTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicsWasScrolled: [],
      topicsPrices: this.props.topicsPrices
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolledElements);
  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolledElements);
  }
  
  trackScrolledElements = () => {
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
    const { handleCardClick, handleQualityChoose, idChoseQuality, calculateTopicPrice} = this.props;
    
    return(
      <div>
        {
          topics.map((topic, i) =>
            <div key={i} className='topic-element' id={`topic-${topic.id}`}>
              <TopicHeader topic={topic}/>

              {
                topic.hasOwnProperty('images') 
                ? <div className='topic-quality-container'>
                  {
                    topic.images.map((image, i) => 
                        <TopicQualitySelect 
                          key={i} 
                          image={image} 
                          topic={topic} 
                          handleQualityChoose={handleQualityChoose}
                          idChoseQuality={idChoseQuality}/>
                      )
                  }
                </div> 
                : <div className='topic-cards'>
                {
                  topic.hasOwnProperty('cards') 
                  ? topic.cards.map((card, i) => 
                      <TopicCard 
                        key={i} 
                        card={card} 
                        topic={topic} 
                        calculateTopicPrice={calculateTopicPrice}/>
                    ) 
                  : topic.hasOwnProperty('slider') 
                  ? <TopicSlider 
                      key={i} 
                      slider={topic.slider} 
                      topic={topic}/>
                  : null
                }
              </div>
              }
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
      "cardText": "3D Visualisation",
    },
    {
      "cardNumber": "2.0",
      "price": "500",
      "cardText": "3D Cartoon",
    },
    {
      "cardNumber": "3.0",
      "price": "500",
      "cardText": "Realistic Character Animation",
    },
    {
      "cardNumber": "4.0",
      "price": "500",
      "cardText": "Technical Visualisation",
    },
    {
      "cardNumber": "5.0",
      "price": "500",
      "cardText": "Robotic Character integration",
    },
    {
      "cardNumber": "6.0",
      "price": "500",
      "cardText": "Creature VFX",
    }
  ]
},
{
  "id": "3",
  "number": "3",
  "title": "Duration",
  "text": "Find a time that suits your animation idea.",
  "slider" : {
    "values": ['5', '10', '15', '20', '25', '30', '35', '40'],
    "prices": ['50', '100', '150', '200', '250', '300', '350', '400'],
  }
},
{
  "id": "4",
  "number": "4",
  "title": "Timeframe",
  "text": "Do you have a particular time frame in mind?",
  "slider" : {
    "values": ['Anytime', '16 weeks', '8 weeks', '4 weeks', 'ASAP'],
    "prices": ['50', '100', '150', '200', '250'],
  }
},
{
  "id": "5",
  "number": "5",
  "title": "Production Quality",
  "text": "Choose Quality",
  "images": [
    {
      "id": "1",
      "url": "img/apple.svg",
      "text": "Acceptable Quality",
      "price": "500"
    },
    {
      "id": "2",
      "url": "img/cherries.svg",
      "text": "Appropriate Quality",
      "price": "1000"
    },
    {
      "id": "3",
      "url": "img/soft--ice--cream.svg",
      "text": "Premium Quality",
      "price": "1500"
    },
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
      "cardText": "Music Track",
    },
    {
      "cardNumber": "2.0",
      "price": "500",
      "cardText": "Sound Effects",
    },
    {
      "cardNumber": "3.0",
      "price": "500",
      "cardText": "Voiceover",
    },
    {
      "cardNumber": "4.0",
      "price": "500",
      "cardText": "Storyboard",
    }
  ]
},
]
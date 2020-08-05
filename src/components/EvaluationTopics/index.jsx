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
      topicsPrices: this.props.topicsPrices,
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

  sliderChangeHandler = (e, value, topicId) => {
    this.props.handleSliderChange(value, topicId)
  }

  render() {
    const { handleQualityChoose, handleTopicSelect, topicsPrices } = this.props;
    
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
                        topicsPrices={topicsPrices}/>
                      )
                  }
                </div> 

                : topic.hasOwnProperty('cards') 
                ? <div className='topic-cards'>
                    {
                      topic.cards.map((card, i) => 
                        <TopicCard 
                          key={i} 
                          card={card} 
                          topic={topic} 
                          topicsPrices={topicsPrices}
                          handleTopicSelect={handleTopicSelect}/>
                      ) 
                    }
                  </div>
                : topic.hasOwnProperty('slider')
                ? <div className='topic-slider'>
                      <TopicSlider 
                        defaultValue={topic.slider[0].value}
                        aria-label="slider"
                        step={50}
                        min={topic.slider[0].value}
                        max={topic.slider[topic.slider.length-1].value}
                        valueLabelDisplay="off"
                        marks={topic.slider}
                        onChange={(i, val) => this.sliderChangeHandler(i, val, topic.id)}
                      />
                  </div>
                : null
              }
            </div> 
          )
        }
      </div>
    );
  }
}

const topics = [{
  "id": 1,
  "number": "1",
  "title": "Choose the medium",
  "text": "Find out the difference in our examples by hovering the cursor.",
  "cards" : [
    {
      "id": 1,
      "cardNumber": "1.0",
      "price": 500,
      "cardText": "3D Animation",
    },
    {
      "id": 2,
      "cardNumber": "2.0",
      "price": 500,
      "cardText": "2D Animation",
    },
    {
      "id": 3,
      "cardNumber": "3.0",
      "price": 500,
      "cardText": "Editing / Motion Graphics",
    },
    {
      "id": 4,
      "cardNumber": "4.0",
      "price": 500,
      "cardText": "Live Action Production",
    },
    {
      "id": 5,
      "cardNumber": "5.0",
      "price": 500,
      "cardText": "Foreign Language",
    },
    {
      "id": 6,
      "cardNumber": "6.0",
      "price": 500,
      "cardText": "Characters",
    },
    {
      "id": 7,
      "cardNumber": "7.0",
      "price": 500,
      "cardText": "Style hybrid",
    }
  ]
},
{
  "id": 2,
  "number": "2",
  "title": "Choose the style",
  "text": "How does the price change? Some styles take more time to produce = higher price.",
  "cards" : [
    {
      "id": 1,
      "cardNumber": "1.0",
      "price": 500,
      "cardText": "3D Visualisation",
    },
    {
      "id": 2,
      "cardNumber": "2.0",
      "price": 500,
      "cardText": "3D Cartoon",
    },
    {
      "id": 3,
      "cardNumber": "3.0",
      "price": 500,
      "cardText": "Realistic Character Animation",
    },
    {
      "id": 4,
      "cardNumber": "4.0",
      "price": 500,
      "cardText": "Technical Visualisation",
    },
    {
      "id": 5,
      "cardNumber": "5.0",
      "price": 500,
      "cardText": "Robotic Character integration",
    },
    {
      "id": 6,
      "cardNumber": "6.0",
      "price": 500,
      "cardText": "Creature VFX",
    }
  ]
},
{
  "id": 3,
  "number": "3",
  "title": "Duration",
  "text": "Find a time that suits your animation idea.",
  "slider" : [
    {
      "value": 50,
      "label": "5"
    },
    {
      "value": 100,
      "label": "10"
    },
    {
      "value": 150,
      "label": "15"
    },
    {
      "value": 200,
      "label": "20"
    },
    {
      "value": 250,
      "label": "25"
    },
    {
      "value": 300,
      "label": "30"
    },
    {
      "value": 350,
      "label": "35"
    },
    {
      "value": 400,
      "label": "40"
    }
  ]
},
{
  "id": 4,
  "number": "4",
  "title": "Timeframe",
  "text": "Do you have a particular time frame in mind?",
  "slider" : [
    {
      "value": 50, 
      "label": "Anytime"
    },
    {
      "value": 100, 
      "label": "16 weeks"
    },
    {
      "value": 150, 
      "label": "8 weeks"
    },
    {
      "value": 200, 
      "label": "4 weeks"
    },
    {
      "value": 250, 
      "label": "ASAP"
    },
  ]
},
{
  "id": 5,
  "number": "5",
  "title": "Production Quality",
  "text": "Choose Quality",
  "images": [
    {
      "id": 1,
      "url": "img/apple.svg",
      "urlSelected": "img/apple-selected.svg",
      "text": "Acceptable Quality",
      "price": 500
    },
    {
      "id": 2,
      "url": "img/cherries.svg",
      "text": "Appropriate Quality",
      "urlSelected": "img/cherries-selected.svg",
      "price": 1000
    },
    {
      "id": 3,
      "url": "img/soft--ice--cream.svg",
      "urlSelected": "img/ice-cream-selected.svg",
      "text": "Premium Quality",
      "price": 1500
    },
  ]
},
{"id": 6,
  
  "number": "6",
  "title": "Additional Options",
  "text": "Choose Additional Options",
  "cards" : [
    {
      "id": 1,
      "cardNumber": "1.0",
      "price": 500,
      "cardText": "Music Track",
    },
    {
      "id": 2,
      "cardNumber": "2.0",
      "price": 500,
      "cardText": "Sound Effects",
    },
    {
      "id": 3,
      "cardNumber": "3.0",
      "price": 500,
      "cardText": "Voiceover",
    },
    {
      "id": 4,
      "cardNumber": "4.0",
      "price": 500,
      "cardText": "Storyboard",
    }
  ]
},
]
import img1 from "../../public/assets/component-01/Image-01.jpg";
import img2 from "../../public/assets/component-01/Image-02.jpg";
import img3 from "../../public/assets/component-01/Image-03.jpg";
import article1Image from "../../public/assets/component-02/Image-01.jpg";
import article2Image from "../../public/assets/component-02/Image-02.jpg";
import article3Image from "../../public/assets/component-02/Image-03.jpg";

export interface Article {
  image: string | object;
  heading: string;
  subHeading: string;
  cta: {
    title: string;
    onPress: () => void | undefined;
  };
  key?: string;
}
export interface ContentMap {
  mainSection: {
    image1: string | object;
    image2: string | object;
    image3: string | object;
    heading: string;
    bodyContent: string;
    subHeading: string;
    subContent: string;
  };
  articles: Article[];
}

export const Content: ContentMap = {
  mainSection: {
    image1: img1,
    image2: img2,
    image3: img3,
    heading: `ANSWER YOUR BODY'S NEEDS`,
    bodyContent: `The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to
    consume according to your body's needs.`,
    subHeading: `BE MINDFUL`,
    subContent: `Sourcing local or organic food is a good way to start being mindful about what you are cooking and eating.`
  },
  articles: [
    {
      key: 'article1',
      image: article1Image,
      heading: `Summer Lunch Menu by Mark Best`,
      subHeading: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and enterntaining at home.`,
      cta: {
        title: `READ MORE`,
        onPress: () => {console.log('clicked on element')}
      }
    },
    {
      key: 'article2',
      image: article2Image,
      heading: `A Traditional Christmas Eve, Mark Best style`,
      subHeading: `One of Australlia's best chefs and AEG ambassador, Mark Best, shares his favorite Christmas Eve menu which is sure to impress your guests.`,
      cta: {
        title: `READ MORE`,
        onPress: () => {console.log('clicked on element')}
      }
    },
    {
      key: 'article3',
      image: article2Image,
      heading: `Takin Taste Further`,
      subHeading: `This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most of our products - and the best out of your food`,
      cta: {
        title: `READ MORE`,
        onPress: () => {console.log('clicked on element')}
      }
    }
  ]
};
// `ANSWER YOUR BODY'S NEEDS`

import facebookColor from '../../assets/images/facebookColor.png';
import insta from '../../assets/images/insta.png';
import LinkdinColor from '../../assets/images/LinkdinColor.png';
import twiter from '../../assets/images/twiter.png';
// import FreeReturns from '../../assets/images/freeReturns.png';
// import FreeShipping from '../../assets/images/freeShipping.png';
// import FreeSourcing from '../../assets/images/freeSourcing.png';

const Shipping = [
    {
        id:1,
        image: 'images/freeShipping.png',
        title: 'Free Shipping',
        description: 'Delivery up to 100$',
    },
    {
        id:2,
        image: 'images/freeReturns.png',
        title: 'Free Returns',
        description: 'Hassle Free Returns',
    },
    {
        id:3,
        image: 'images/freeSourcing.png',
        title: 'Secure Shopping',
        description: 'Best Security Features',
    },
    {
        id:4,
        image: 'images/freeBlocks.png',
        title: 'Unlimited BLocks',
        description: 'Any Comments Any Pages',
    },
]
const AboutData = 
    {
        title: 'About Us',
        description : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur repellat perspiciatis dolorum temporibus veritatis, ipsa earum eum id molestiae nulla.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur repellat perspiciatis dolorum temporibus veritatis, ipsa earum eum id molestiae nulla.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequaturLorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur repellat perspiciatis dolorum temporibus veritatis, ipsa earum eum id molestiae nulla.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequaturLorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur repellat perspiciatis dolorum temporibus veritatis, ipsa earum eum id molestiae nulla.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequaturLorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur repellat perspiciatis dolorum temporibus veritatis, ipsa earum eum id molestiae nulla.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequaturLorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur repellat perspiciatis dolorum temporibus veritatis, ipsa earum eum id molestiae nulla.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur`,
        image: 'images/about/aboutus.jpg'
    }

const Cards = [
    {
        id:1,
        image: 'images/master.png'
    },
    {
        id:2,
        image: 'images/payonner.png'
    },
    {
        id:3,
        image: 'images/paypal.png'
    },
    {
        id:4,
        image: 'images/visa.png'
    },
    
]



const Socials = [
    {
        id: 1,
        name: 'Fcebook',
        image: facebookColor,
        url :'https://www.facebook.com/'
    },
    {
        id: 2,
        name: 'Twitter',
        image: twiter,
        url :'https://twitter.com/'
        
    },
    {
        id: 3,
        name: 'Linkdin',
        image: LinkdinColor,
        url :'https://www.linkedin.com'
    },
    {
        id: 4,
        name: 'Instagram',
        image: insta,
        url :'https://www.instagram.com/'
    }
]

const Title = 'Why Buy From Us'
const Features = 'Featured Products'

const Description =`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur repellat perspiciatis dolorum temporibus veritatis, ipsa earum eum id molestiae nulla.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsam neque minus, harum rem minima, atque architecto commodi consequatur`


const Policys = ['Home', 'About Us', 'Privecy', 'Return', 'Products']

export { Cards, Socials, Policys, Title, Features, Description, Shipping, AboutData };


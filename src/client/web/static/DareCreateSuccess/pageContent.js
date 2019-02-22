import {
  ACTIVE_PROJECTS_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'
import image from 'sls-aws/src/client/assets/Dare-success-create.jpg'


export default {
  title: 'Daring!',
  paragraphs: [
    `Your new dare is being reviewed. We'll email you when it's live. 
    Don't forget to tell your friends!`,
    `Remember this is just a pledge and you’ll only be charged if the streamer delivers. 
    If they don’t deliver, you won’t pay a thing!`
  ],
  link: ACTIVE_PROJECTS_ROUTE_ID,
  backgroundImage: `url("${image}")`,
  linkLabel: 'Go to Marketplace'
}


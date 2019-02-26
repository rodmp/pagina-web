import React from 'react'
import {
	EMAIL,
} from 'root/src/shared/constants/pageData'

const pageContent = classes => [
	{
		title: 'Report a Violation',
		text: (
			<p>
	If you're not sure whether material on Double Dog infringes on your copyright, 
	please consult with an attorney before filing a DMCA notification. 
	Misrepresenting that material infringes on your copyright may subject you to 
	liability for damages, including costs and attorneys' fees incurred by streamers
	or other parties.

	If you believe that your copyright is being infringed, you can file a DMCA 
	notification by emailing us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Your 
	claim must include the following information (please note that all 
	information must be submitted in English):
	<ul className={classes.list}>
	<li>an electronic or physical signature of the person authorized to act on 
		behalf of the owner of the copyright interest;
	</li>
	<li>a description of the copyrighted work that you claim has been infringed;</li>
	<li>a description of where the material that you claim is infringing is 
		located on the Site, sufficient for Double Dog to locate the material;</li>
	<li>your address, telephone number, and email address;</li>
	<li>a statement by you that you understand that under 17 U.S.C § 512(f) you 
		may be liable for any damages, including costs and attorneys' fees, if you 
		knowingly and materially misrepresent that reported material or activity 
		is infringing;</li>
	<li>a statement by you that you have a good faith belief that the disputed 
		use is not authorized by the copyright owner, its agent, or the law; and</li>
	<li>a statement by you that the information in your notice is accurate and, 
		under penalty of perjury, that you are the copyright owner or authorized 
		to act on the copyright owner's behalf.</li>
</ul>
			</p>
		),
	},
	{
		title: 'Counter-Notification',
		text: (
			<p>
				Your counter-notification email must contain the following information
				(please confirm these requirements with your legal counsel or see the 
				U.S. Copyright Act, 17 U.S.C. §512(g)(3) for more information. Please 
				also note that all information must be submitted in English:
				<ul className={classes.list}>
				<li>a physical or electronic signature of the user of the services;</li>
				<li>identification of the material that has been removed or to which 
					access has been disabled and the location at which the material 
					appeared before it was removed or access to it was disabled;</li>
				<li>a statement made under penalty of perjury that the subscriber 
						has a good faith belief that the material was removed or disabled 
						as a result of mistake or misidentification of the material; and</li>
				<li>the subscriber’s name, address, telephone number, and a statement 
					that the subscriber consents to the jurisdiction of the Federal 
					District Court for the judicial district in which the address is 
					located, or if the subscriber’s address is outside of the United 
					States, for any judicial district in which the service provider may 
					be found, and that the user will accept service of process from the 
					person who provided notification under 17 U.S.C. § 512(c)(3), or an 
					agent of such person.</li>
			</ul>
		Please note that under Section 512(f) of the Copyright Act, any person 
		who knowingly materially misrepresents that material or activity was 
		removed or disabled by mistake or misidentification may be subject to 
		liability.
</p>
		),
	},
]

export default pageContent

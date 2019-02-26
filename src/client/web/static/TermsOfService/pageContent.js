import React from 'react'
import Link from 'root/src/client/web/base/Link'
import {
	PRIVACY_POLICY_ROUTE_ID,
	COOKIE_POLICY_ROUTE_ID,
	COPYRIGHT_POLICY_ROUTE_ID,
	RULES_OF_USE_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'
import {
	EMAIL,
} from 'root/src/shared/constants/pageData'


const pageContent = classes => [
	{
		title: '1. Welcome to Double Dog!',
		paragraph: (<span>
			This page explains our terms of service. When you use Double Dog, you’re agreeing to all 
			the rules on this page. We’ve done our best to offer you clear and simple explanations 
			of what everything means with brief summaries before each Section. The summaries are 
			not part of the official legal terms.
		</span>),
		text: (
			<React.Fragment>
				<p>
          Welcome to Double Dog. By using this website (the “Site”) and services (together with the
          Site, the “Services”) offered by Double Dog (together with its parents, subsidiaries,
          affiliates, agents, representatives, consultants, employees, officers, and directors —
          collectively, “Double Dog,” “we,” or “us”), you’re agreeing to these legally binding rules
          (the “Terms”). You’re also agreeing to our{' '}
					<Link routeId={PRIVACY_POLICY_ROUTE_ID}>Privacy Policy</Link> and{' '}
					<Link routeId={COOKIE_POLICY_ROUTE_ID}>Cookie Policy</Link>, and agreeing to follow any
          other rules on the Site, like our <Link routeId={RULES_OF_USE_ROUTE_ID}>rules for starting Dares</Link>.
				</p>
				<p>
          We may change these terms from time to time. If we do, we’ll let you know about any
          material changes, either by notifying you on the Site or by sending you an email. New
          versions of the terms will never apply retroactively and we’ll tell you the exact date
          they go into effect. If you keep using Double Dog after a change, that means you accept
          the new terms.
				</p>
				<p>
          Double Dog is for your personal, non-commercial use, except as explained in{' '}
					<a href="#section-4">
            Section 4
					</a>{' '}
          and{' '}
					<a href="#section-5">
            Section 5
					</a>{' '}
          below.
				</p>
			</React.Fragment>
		),
	},
	{
		title: '2. Creating an Account',
		paragraph: (<span>
			To sign up for a Double Dog account, you need to be 18 years old or older. You’re 
			responsible for your account and all the activity on it.
		</span>),
		text: (
			<React.Fragment>
				<p>
          You can browse Double Dog without registering for an account. But to use some of Double
          Dog’s functions, you’ll need to register. When you do that, the information you give us
          has to be accurate and complete. Don’t choose names that are offensive or that violate
          anyone’s rights, and don’t impersonate anyone. If you don’t follow these rules, we may
          cancel your account.
				</p>
				<p>
          You’re responsible for all the activity on your account, and for keeping your password
          confidential. If you find out that someone has used your account without your permission,
          report it to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
				</p>
				<p>
          To sign up for an account, you need to be at least 18 years old, or old enough to form a
          binding contract where you live. If necessary, we may ask you for proof of your age.
				</p>
			</React.Fragment>
		),
	},
	{
		title: '3. Don’t Do These Things',
		paragraph: (<span>
			This Section is a List of things you know you shouldn’t do: lie, break laws, abuse people, 
			steal data, hack other people’s computers, and so on. Please behave yourself.
		</span>),
		text: (
			<React.Fragment>
				<p>
          Many people use Double Dog. We expect all of them to help keep this a nice place. Don’t do
          any of these things on the Site:
				</p>
				<ul className={classes.termsList}>
					<li>
						<strong>Don’t break the law.</strong> Don’t take any action that infringes or violates
            other people’s rights, violates the law, or breaches any contract or legal duty you have
            toward anyone
					</li>
					<li>
						<strong>Don’t spam.</strong> Don’t distribute unsolicited or unauthorized advertising or
            promotional material, or any junk mail, spam, or chain letters. Don’t run mail
            TermLists, TermListservs, or any kind of auto-responder or spam on or through the Site.
					</li>
					<li>
						<strong>Don’t lie to people.</strong> Don’t post information you know is false,
            misleading, or inaccurate. Don’t do anything deceptive or fraudulent.
					</li>
					<li>
						<strong>Don’t solicit use of prohibited items of activities. </strong>
            Don’t post Dares that include or encourage illegal actions or items, violate any of
            Double Dog’s policies, rules, or guidelines, or violate any applicable law, statute,
            ordinance, or regulation.
					</li>
					<li>
						<strong> Don’t victimize anyone.</strong> Don’t do anything threatening, abusive,
            harassing, defamatory, libelous, tortious, obscene, profane, or invasive of another
            person’s privacy.
					</li>
					<li>
						<strong> Don’t harm anyone’s computer. </strong>Don’t distribute software viruses, or
            anything else (code, films, programs) designed to interfere with the proper function of
            any software, hardware, or equipment on the Site (whether it belongs to Double Dog or
            another party).
					</li>
				</ul>
				<p>
          We also need to make sure that the Site is secure and functions properly. So don’t do any
          of these things — most of which boil down to “don’t mess with our system.”
				</p>
				<ul className={classes.termsList}>
					<li>Don’t try to interfere with the proper workings of the Services.</li>
					<li>Don’t bypass any measures we’ve put in place to secure the Services.</li>
					<li>
            Don’t try to damage or get unauthorized access to any system, data, password, or other
            information, whether it belongs to Double Dog or another party.
					</li>
					<li>
            Don’t take any action that imposes an unreasonable load on our infrastructure, or on our
            third-party providers. (We reserve the right to determine what’s reasonable.)
					</li>
					<li>
            Don’t use any kind of software or device (whether it’s manual or automated) to “crawl”
            or “spider” any part of the Site.
					</li>
					<li>
            Don’t take apart or reverse engineer any aspect of Double Dog in an effort to access
            things like source code, underlying ideas, or algorithms.
					</li>
				</ul>
			</React.Fragment>
		),
	},
	{
		id: 'section-4',
		title: '4. How Dares Work',
		paragraph: (<span>
			Most of our Terms of Service explain your relationship with Double Dog. This section is 
			different — it explains the relationship between creators and backers of Double Dog Dares, 
			and who’s responsible for what. This is what you’re agreeing to when you create, fund, 
			delivers results for a Double Dog Dare.
		</span>),
		text: (
			<React.Fragment>
				<p>
          Double Dog provides a funding platform for creative Dares. When a creator fulfills a
          Dare on Double Dog or a funder backs a Dare on Double Dog, they’re inviting other
          people to form a contract with them. Anyone who delivers the result for a Dare is
          accepting the creator’s and funder’s offer, and forming that contract
				</p>
				<p>
          Double Dog is not a part of this contract — the contract is a direct legal agreement
          between creators and backers. Here are the terms that govern that agreement:
				</p>
				<p>
          When a Dare is successfully delivered,{' '}
					<b>the funders must pay their pledged amounts to the deliverer</b>. Once a funder has done
          so, they’ve satisfied their obligation to the other funders and the deliverer.
				</p>
				<p>
          Throughout the process, deliverers owe their funders a high standard of effort, honest
          communication, and a dedication to bringing the Dare to life. At the same time, funders
          must understand that when they fund a Dare, they’re helping to create something. There
          may be changes or delays, and there’s a chance something could happen that prevents a
          deliverer from being able to finish the Dare as requested.
				</p>
				<p>
          The deliverers are each solely responsible for fulfilling the promises made in their
          claimed Dare. If they’re unable to satisfy the terms of this agreement, they may be
          subject to legal action by the funders.
				</p>
			</React.Fragment>
		),
	},
	{
		id: 'section-5',
		title: '5. How Funding Works',
		paragraph: (<span>
			This Section goes over the details of funding and creating Dares. This is how money gets 
			collected, and the details on how and when pledges can be changed or canceled.
		</span>),
		text: (
			<React.Fragment>
				<p>These are the terms that apply when you’re funding or creating a Dare:</p>
				<ul className={classes.termsList}>
					<li>
            You’re only charged if the Dare is delivered. You’ll provide your payment information
            when you pledge, but you won’t be charged. Your payment will only be collected if, at
            the time of the Dare’s funding deadline, the Dare has been delivered. The exact
            amount you pledged is the amount Double Dog will collect. If the Dare hasn’t been
            delivered, you won’t be charged, and no money will change hands.
					</li>
					<li>
            In some cases we’ll reserve the charge on your card. Double Dog and its payment partners
            may authorize or reserve a charge on your credit card (or whatever payment method you
            use) for any amount up to the full pledge, at any time between the pledge and the
            collection of funds.
					</li>
					<li>
            You can change or cancel your pledge at any time before the Dare’s funding deadline
            (with one exception). You can increase, decrease, or cancel your pledge at any time
            during the Dare, with one exception. During the last 24 hours before the Dare is
            delivered on, you can’t decrease or cancel your pledge without contacting customer
            support first — if the deliverer has already created the video or is in the process of
            streaming the video which will be used to deliver on the Dare.
					</li>
					<li>
            Double Dog doesn’t offer refunds. Responsibility for finishing a Dare lies entirely
            with the Dare deliverer. Double Dog doesn’t hold funds on deliverers’ behalf, cannot
            guarantee deliverers’ work, and does not offer refunds.
					</li>
				</ul>
				<p>
          These are the terms that apply when you’re <b>delivering a Dare</b>:
				</p>
				<ul className={classes.termsList}>
					<li>
						<b>We’ll charge our fees before putting funds in your account</b>. Double Dog and its
            payment partners will subtract fees before transmitting the proceeds of a Dare.
					</li>
					<li>
						<b>Some pledges can’t be collected, which might reduce the amount of funding you get</b>
            . Because some payments can’t be collected — for instance, when a backer’s credit card
            expires before funding ends, and they don’t provide updated information — we can’t
            guarantee that the amount of funding you receive will be exactly equal to the full
            amount pledged minus fees.
					</li>
					<li>
						<b>We'll help resolve payment-card disputes</b>. If a backer of your Dare disputes
            the charge with their card issuer, we'll handle re-presenting the charge to settle the
            dispute with the card issuer. You’ll be notified that a dispute has been filed, and
            you’ll be able to provide evidence to help us resolve it in your favor. If the
            cardholder’s dispute is found valid, you authorize us to charge the credit card number
            you provided when you delivered on the Dare for the amount of the chargeback.
					</li>
					<li>
						<b>Don’t count your chickens before they hatch</b>. Don’t assume you’ll be able to
            deliver on a Dare when you want; there could be a reason we’re not able to accept it,
            or a problem that takes time to resolve. Don’t assume you’ll be able to immediately
            collect your funding; there may be a delay between the end of a successful Dare and
            your access to the funds. And don’t take any actions in reliance on collecting any of
            the money pledged until you actually have the ability to withdraw it from your account
            and spend it.
					</li>
				</ul>
			</React.Fragment>
		),
	},
	{
		title: '6. Stuff We Aren’t Responsible For',
		paragraph: (<span>
			We don’t oversee Dares’ performance, and we don’t mediate disputes between users.`,
		</span>),
		text: (
			<p>
        Double Dog isn’t liable for any damages or losses related to your use of the Services. We
        don’t become involved in disputes between users, or between users and any third party
        relating to the use of the Services. We don’t oversee the performance or punctuality of
        Dares, and we don’t endorse any content users submit to the Site. When you use the
        Services, you release Double Dog from claims, damages, and demands of every kind — known or
        unknown, suspected or unsuspected, Dsclosed or undisclosed — arising out of or in any way
        related to such disputes and the Services. All content you access through the Services is at
        your own risk. You’re solely responsible for any resulting damage or loss to any party.
			</p>
		),
	},
	{
		title: '7. Our Fees',
		paragraph: (<span>
			Fees are only charged on successfully funded Dares. We charge 5%, in addition to any fees 
			from our payments partners.
		</span>),
		text: (
			<React.Fragment>
				<p>
          Creating an account on Double Dog is free. If you create, fund or deliver on a Dare
          that is successfully funded, we (and our payment partners) collect fees. Our partners’
          fees may vary slightly based on your location.
				</p>
				<p>
          We will not collect any fees without giving you a chance to review and accept them. If our
          fees ever change, we’ll announce that on our Site. Some funds pledged by backers are
          collected by payment providers. Each payment provider is its own company, and Double Dog
          isn’t responsible for its performance.
				</p>
				<p>
          You’re responsible for paying any additional fees or taxes associated with your use of
          Double Dog.
				</p>
			</React.Fragment>
		),
	},
	{
		title: '8. Other Websites',
		paragraph: (<span>
			If you follow a link to another website, what happens there is between you and them — not us.
		</span>),
		text: (
			<React.Fragment>
				<p>
          Double Dog may contain links to other websites (for instance, Dare pages, and user
          profiles may link to other sites). When you access third-party websites, you
          do so at your own risk. We don’t control or endorse those sites.
				</p>
				<p>
          Double Dog partners with other companies (such as <a href="https://stripe.com/" target="__blank">
					Stripe</a>) for payment processing. When you back or create a Dare, you’re also 
					agreeing to the payment processor’s terms of service.
				</p>
			</React.Fragment>
		),
	},
	{
		title: '9. Your Intellectual Property',
		paragraph: (<span>
			We don’t own the stuff you post on Double Dog. But when you post it, you’re giving us 
			permission to use or copy it however we need in order to run the site, or show people 
			what’s happening on it. (We generally just use this to promote Dares and showcase our 
			community on the website.) You’re responsible for the content you post, and you’re vouching 
			to us that it’s all okay to use.
			</span>),
		text: (
			<React.Fragment>
				<p>
          Double Dog doesn’t own content you submit to us (your “Content”). But we do need certain
          licenses from you in order to perform our Services. When you submit delivery on a Dare
          or submit a new Dare for review, you agree to these terms:
				</p>
				<ul className={classes.termsList}>
					<li>
						<b>We can use the content you’ve submitted</b>. You grant to us, and others acting on
            our behalf, the worldwide, non-exclusive, perpetual, irrevocable, royalty-free,
            sublicensable, transferable right to use, exercise, commercialize, and exploit the
            copyright, publicity, trademark, and database rights with respect to your Content.
					</li>
					<li>
						<b> When we use the content, we can make changes, like editing or translating it</b>.
            You grant us the right to edit, modify, reformat, excerpt, delete, or translate any of
            your Content.
					</li>
					<li>
						<b>
              You won’t submit Content you don’t hold the copyright for (unless you have permission)
						</b>
            . Your Content will not contain third-party copyrighted material, or material that is
            subject to other third-party proprietary rights, unless you have permission from the
            rightful owner of the material, or you are otherwise legally entitled to post the
            material (and to grant Double Dog all the license rights outlined here).
					</li>
					<li>
						<b>Any royalties or licensing on your Content are your responsibility</b>. You will pay
            all royalties and other amounts owed to any person or entity based on your Content, or
            on Double Dog’s hosting of that Content.
					</li>
					<li>
						<b>
              You promise that if we use your Content, we’re not violating anyone’s rights or
              copyrights
						</b>
            . If Double Dog or its users exploit or make use of your submission in the ways
            contemplated in this agreement, you promise that this will not infringe or violate the
            rights of any third party, including (without limitation) any privacy rights, publicity
            rights, copyrights, contract rights, or any other intellectual property or proprietary
            rights.
					</li>
					<li>
						<b>You’re responsible for the stuff you post</b>. All information submitted to the Site,
            whether publicly posted or privately transmitted, is the sole responsibility of the
            person from whom that content originated.
					</li>
					<li>
						<b>We’re not responsible for mistakes in your content</b>. Double Dog will not be liable
            for any errors or omissions in any content.
					</li>
				</ul>
			</React.Fragment>
		),
	},
	{
		title: '10. Double Dog’s Intellectual Property',
		paragraph: (<span>The content on Double Dog is protected in various ways. You do have the 
			right to use it for certain personal purposes, but you can’t use it for anything commercial 
			without getting permission first.
		</span>),
				text: (
			<React.Fragment>
				<p>
          Double Dog’s Services are legally protected in various ways, including copyrights,
          trademarks, service marks, patents, trade secrets, and other rights and laws. You agree to
          respect all copyright and other legal notices, information, and restrictions contained in
          any content accessed through the Site. You also agree not to change, translate, or
          otherwise create derivative works of the Service.
				</p>
				<p>
          Double Dog grants you a license to reproduce content from the Services for personal use
          only. This license covers both Double Dog’s own protected content and user-generated
          content on the Site. (This license is worldwide, non-exclusive, non-sublicensable, and
          non-transferable.) If you want to use, reproduce, modify, distribute, or store any of this
          content for a commercial purpose, you need prior written permission from Double Dog or the
          relevant copyright holder. A “commercial purpose” means you intend to use, sell, license,
          rent, or otherwise exploit content for commercial use, in any way.
				</p>
			</React.Fragment>
		),
	},
	{
		title: '11. How We Deal with Copyright Issues',
		paragraph: (<span>
        We comply with 
				the <a href="https://www.copyright.gov/legislation/dmca.pdf">
				Digital Millennium Copyright Act</a>.
              </span>),
		text: (
			<React.Fragment>
				<p>
          To learn more about how we deal with claims of copyright infringement, read our Copyright
          Policy. The Digital Millennium Copyright Act lays out a system of legal requirements for
          dealing with allegations of copyright infringement. Double Dog complies with the DMCA, and
          we respond to notices of alleged infringement if they comply with the law and the
          requirements set forth in our <Link routeId={COPYRIGHT_POLICY_ROUTE_ID}>Copyright Policy</Link>. 
					We reserve the right to delete or disable content alleged to be infringing, and to terminate 
					accounts for repeat infringers. (We do this when appropriate and at our sole discretion.)
				</p>
				<p>
          If you’d like to submit a claim of copyright infringement, please visit our{' '}
					<Link routeId={COPYRIGHT_POLICY_ROUTE_ID}>Copyright Policy</Link>. Our designated agent 
					for notice of alleged copyright infringement is:
				</p>
				<p>
					<span>Double Dog</span>
					<br />
					<span>Attn: Copyright Office</span>
					<br />
					<span>320 W 38th st., 1122</span>
					<br />
					<span>New York, NY 10018</span>
					<br />
					<span>
						<a href={`mailto:${EMAIL}`}>{EMAIL}</a>
					</span>
				</p>
			</React.Fragment>
		),
	},
	{
		title: '12. Deleting Your Account',
		paragraph: (<span>
			You can delete your account at any time. Deleting your account won’t automatically make some
      content you’ve already posted go away.
		</span>),
		text: (
			<React.Fragment>
				<p>
          You can delete your account at any time. Deleting your account won’t automatically make
          some content you’ve already posted go away.
				</p>
				<p>
          You can terminate your account at any time through your account settings. We may retain
          certain information as required by law or as necessary for our legitimate business
          purposes. All provisions of this agreement survive termination of an account, including
          our rights regarding any content you’ve already submitted to the Site. (For example, if
          you’ve created a Dare, deleting your account will not remove the Dare from the
          Site.) You can contact us at{' '}
					<a href={`mailto:${EMAIL}`}>{EMAIL}</a> for more
          information or to request Dare page deletion (this is not available in all
          circumstances).
				</p>
			</React.Fragment>
		),
	},
	{
		title: '13. Our Rights',
		paragraph: (<span>
        To operate, we need to be able to maintain control over what happens on our website. So in
        this Section, we reserve the right to make decisions to protect the health and integrity
        of our system. We don’t take these powers lightly, and we only use them when we absolutely
        have to.
		</span>),
		text: (
			<React.Fragment>
				<p>Double Dog reserves these rights:</p>
				<ul className={classes.termsList}>
					<li>
            We can make changes to the Double Dog Site and Services without notice or liability.
					</li>
					<li>
            We have the right to decide who’s eligible to use Double Dog. We can cancel accounts or
            decline to offer our Services (especially if you’re abusing them). We can change our
            eligibility criteria at any time. If these things are prohibited by law where you live,
            then we revoke your right to use Double Dog in that jurisdiction.
					</li>
					<li>
            We have the right to cancel any pledge to any Dare, at any time and for any reason.
					</li>
					<li>
            We have the right to reject, cancel, interrupt, remove, or suspend any Dare at any
            time and for any reason.
					</li>
				</ul>
				<p>
          Double Dog is not liable for any damages as a result of any of these actions, and it is
          our policy not to comment on the reasons for any such action.
				</p>
			</React.Fragment>
		),
	},
	{
		title: '14. Warranty Disclaimer',
		paragraph: (<span>
      We work hard to provide you with great services, but we can’t guarantee everything will
      always work perfectly. This site is presented as-is, without warranties.
		</span>),
		text: (
			<React.Fragment>
				<p>
          You use our Services solely at your own risk. They are provided to you “as is” and “as
          available” and <em>without warranty of any kind</em>, express or implied.
				</p>
				<p>
          DOUBLE DOG SPECIFICALLY DISCLAIMS ANY AND ALL WARRANTIES AND CONDITIONS OF
          MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY
          WARRANTIES IMPLIED BY ANY COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. NO
          ADVICE OR INFORMATION (ORAL OR WRITTEN) OBTAINED BY YOU FROM DOUBLE DOG SHALL CREATE ANY
          WARRANTY.
				</p>
			</React.Fragment>
		),
	},
	{
		title: '15. Indemnification ',
		paragraph: (<span>
      If you do something on Double Dog that winds up getting us sued, you have to help defend us.
    </span>),
		text: (
			<React.Fragment>
				<p>
          If you do something that gets us sued, or break any of the promises you make in this
          agreement, you agree to defend, indemnify, and hold us harmless from all liabilities,
          claims, and expenses (including reasonable attorneys’ fees and other legal costs) that
          arise from or relate to your use or misuse of Double Dog. We reserve the right to assume
          the exclusive defense and control of any matter otherwise subject to this indemnification
          clause, in which case you agree that you’ll cooperate and help us in asserting any
          defenses.
				</p>
				<p>
          If you do something that gets us sued, or break any of the promises you make in this
          agreement, you agree to defend, indemnify, and hold us harmless from all liabilities,
          claims, and expenses (including reasonable attorneys’ fees and other legal costs) that
          arise from or relate to your use or misuse of Double Dog. We reserve the right to assume
          the exclusive defense and control of any matter otherwise subject to this indemnification
          clause, in which case you agree that you’ll cooperate and help us in asserting any
          defenses.
				</p>
			</React.Fragment>
		),
	},
	{
		title: '16. Limitation of Liability',
		paragraph: (<span>
      If something bad happens as a result of your use Double Dog, we’re not liable.
		</span>),
		text: (
			<p>
        To the fullest extent permitted by law, in no event will Double Dog, its directors,
        employees, partners, suppliers, or content providers be liable for any indirect, incidental,
        punitive, consequential, special, or exemplary damages of any kind, including but not
        limited to damages (i) resulting from your access to, use of, or inability to access or use
        the Services; (ii) for any lost profits, data loss, or cost of procurement or substitute
        goods or services; or (iii) for any conduct of content of any third party on the Site.
			</p>
		),
	},
	{
		title: '17. Dispute Resolution and Governing Law',
		paragraph: (<span>
      We’re located in New York, and any disputes with us have to be handled in New York under New
      York State law.
		</span>),
		text: (
			<p>
        We at Double Dog encourage you to contact us if you’re having an issue, before resorting to
        the courts. In the unfortunate situation where legal action does arise, these Terms (and all
        other rules, policies, or guidelines incorporated by reference) will be governed by and
        construed in accordance with the laws of the State of New York and the United States,
        without giving effect to any principles of conflicts of law, and without application of the
        Uniform Computer Information Transaction Act or the United Nations Convention of Controls
        for International Sale of Goods. You agree that Double Dog and its Services are deemed a
        passive website that does not give rise to jurisdiction over Double Dog or its parents,
        subsidiaries, affiliates, assigns, employees, agents, directors, officers, or shareholders,
        either specific or general, in any jurisdiction other than the State of New York. You agree
        that any action at law or in equity arising out of or relating to these Terms, or your use
        or non-use of Double Dog, shall be filed only in the state or federal courts located in New
        York County in the State of New York, and you hereby consent and submit to the personal
        jurisdiction of these courts for the purposes of litigating any such action. You hereby
        irrevocably waive any right you may have to trial by jury in any dispute, action, or
        proceeding.
			</p>
		),
	},
	{
		title: '18. The Rest',
		paragraph: (<span>
      These are our official terms and our rules for how things work. (So if you ever see
      conflicting information about any of this stuff, the information here is the last word.)
		</span>),
		text: (
			<React.Fragment>
				<p>
          These Terms and the other material referenced in them are the entire agreement between you
          and Double Dog with respect to the Services. They supersede all other communications and
          proposals (whether oral, written, or electronic) between you and Double Dog with respect
          to the Services and govern our future relationship. If any provision of these Terms is
          found to be invalid under the law, that provision will be limited or eliminated to the
          minimum extent necessary so that the Terms otherwise will remain in full force and effect
          and enforceable. The failure of either you or Double Dog to exercise any right provided
          for in these Terms in any way won’t be deemed a waiver of any other rights.
				</p>
				<p>
          These Terms are personal to you. You can’t assign them, transfer them, or sublicense them
          unless you get Double Dog’s prior written consent. Double Dog has the right to assign,
          transfer, or delegate any of its rights and obligations under these Terms without your
          consent. Double Dog will provide you notice via email, written notice, or by conspicuously
          posting the notice on our Site.
				</p>
			</React.Fragment>
		),
	},
]

export default pageContent

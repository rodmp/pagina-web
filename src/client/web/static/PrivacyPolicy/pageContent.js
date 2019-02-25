import React from 'react'
import ANCHORS from 'root/src/shared/constants/anchors'
import Link from 'root/src/client/web/base/Link'
import {
	COOKIE_POLICY_ROUTE_ID,
	TERMS_OF_SERVICE_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'
import {
	EMAIL,
} from 'root/src/shared/constants/pageData'


const pageContent = classes => [
	{
		title: 'Changes to This Policy',
		id: ANCHORS.CHANGE_POLICY,
		text: (
			<p>
        We may update this Policy periodically. If we do, we’ll let you know about any material
        changes, either by notifying you on the Site or by sending you an email. New versions of
        this Policy will never apply retroactively — we’ll tell you the exact date they go into
        effect. If you keep using Double Dog after a change, that means you accept this Policy.
			</p>
		),
	},
	{
		title: 'Who We Are',
		id: ANCHORS.WHO_WE_ARE,
		text: (
			<p>
        Double Dog, PBC (along with its parents, subsidiaries, affiliates, agents, representatives, 
		consultants, employees, officers, and directors — collectively, “Double Dog,” “we,” or 
		“us”) provides services that help people bring creative content to life. Our main service 
		is a funding platform for creative dares.
			</p>
		),
	},
	{
		title: 'How This Policy Applies',
		id: ANCHORS.HOW_APPLIES,
		text: (
			<React.Fragment>
				{' '}
				<p>
          This Policy describes the information we collect from you, how we use that information and
          our legal basis for doing so. It also covers whether and how that information may be
          shared and your rights and choices regarding the information you provide to us. If you see
          a capitalized word, it’s defined in our <Link routeId={TERMS_OF_SERVICE_ROUTE_ID}>Terms of Use</Link>. We use cookies
          and similar technologies, as described in our <Link routeId={COOKIE_POLICY_ROUTE_ID}>Cookie Policy</Link>.
				</p>
				<p>
          By using the Services offered by Double Dog, you’re acknowledging you have agreed to our
          Terms of Use and that you have read and understood this Privacy Policy and our Cookie
          Policy.
				</p>
			</React.Fragment>
		),
	},
	{
		title: 'What We Collect and Receive',
		id: ANCHORS.COLLECT_AND_RECIVE,
		text: (
			<React.Fragment>
				<p>
          In order for you to create an account on Double Dog and use our Services, we need to
          collect and process certain information. Depending on your use of the Services, that may
          include:
				</p>
				<ul className={classes.list}>
					<li>
            Information you provide by completing forms on Double Dog — your name, email and postal
            addresses, telephone number, country of residence, login, and password details. We may
            ask for this information if you register as a user of the Services, subscribe to our
            newsletters, upload, pledge or submit content through Double Dog, or if you contact us;
					</li>
					<li>
            Information you provide for identity verification purposes when fulfilling a dare,
            including your legal name, business name and Tax ID for business entities, and date of
            birth. In some cases, our payment processor will request that you provide a secure
            upload of an identity document (such as your passport, drivers license or other
            government-issued ID) to Double Dog;
					</li>
					<li>
            Details of any requests or transactions you make through the Services. Double Dog
            partners with other companies (such as Stripe) for payment processing, and the payment
            information you submit is collected and used by them in accordance with their privacy
            policies (for Stripe’s, click here). Double Dog doesn’t store your payment information
            apart from the last four digits of your credit card or bank account (as applicable),
            expiration date, and country, which we require for tax, government regulatory, and
            security purposes;
					</li>
					<li>
            Information about your activity on and interaction with Double Dog, including use of our
            mobile apps (such as your IP address, the type of device or browser you use, and your
            actions on the Site);
					</li>
					<li>
            Information about the ways people visit and interact with our Site, in the form of
            traffic analytics. You can opt out of being included in Google Analytics{' '}
						<Link routeId={null}>here</Link>. For more information about our use of data analytics to protect
            and improve our Services, see our <Link routeId={COOKIE_POLICY_ROUTE_ID}>Cookie Policy</Link>;
					</li>
					<li>
            Communications you send to us (for example, when you ask for support, send us questions
            or comments, or report a problem); and
					</li>
					<li>
            Information that you submit on or to Double Dog in the form of comments, contributions
            to discussions, or messages to other users.
					</li>
				</ul>
				<p>
          You may decline to provide us with your information. However, this will limit your ability
          to register for an account or use our Services. You may pledge to a dare as a guest by
          providing only an email address. However, to adjust your pledge, save payment details for
          future pledges, make dare comments and take most other actions on our Site, you will
          need to finish creating an account. You may review, change or remove your information
          through your <Link routeId={null}>account settings</Link>.
				</p>
			</React.Fragment>
		),
	},
	{
		title: 'How We Use This Information',
		id: ANCHORS.HOW_USE_INFO,
		text: (
			<React.Fragment>
				<p>We use the information we collect for the following purposes:</p>
				<ul className={classes.list}>
					<li>
            To keep your account secure and protect our Services (including to verify the identities
            of creators and prevent fraud and abuse);
					</li>
					<li>
            To enable us to provide you with our Services, and to improve and promote our Services;
					</li>
					<li>
            To create and administer your account, contact you, and customize your experience on
            Double Dog (for example, to show you dares that we think may interest you based on
            your previous use); and
					</li>
					<li>
            To track and analyze use of the Services so that we can improve how Double Dog is
            performing and provide users with the best experience possible.
					</li>
				</ul>
			</React.Fragment>
		),
	},
	{
		title: 'European Union Users',
		id: ANCHORS.UNION_USER,
		text: (
			<React.Fragment>
				<p>
          Data protection law in Europe requires a “lawful basis” for collecting and retaining
          personal information from citizens or residents of the European Economic Area. Our lawful
          bases include:
				</p>
				<ul className={classes.list}>
					<li>
            Performing the contract we have with you: In certain circumstances, we need your
            personal data to comply with our contractual obligation to deliver the Services, enable
            creators to establish and display their dares, and enable backers to find and make
            pledges to them.
					</li>
					<li>
            Legal compliance: Sometimes the law says we need to collect and use your data. For
            example, tax laws require us to retain records of pledges and payments made through our
            Services.
					</li>
					<li>
						<p>
              Legitimate interests: This is a technical term in data protection law which
              essentially means we have a good and fair reason to use your data and we do so in ways
              which do not hurt your interests and rights. We sometimes require your data to pursue
              our legitimate interests n a way that might reasonably be expected as part of running
              our business and that does not materially impact your rights, freedom or interests.
						</p>
						<p>
              For example, we use identity, device, and location information to prevent fraud and
              abuse and to keep the Services secure. We may also send you promotional communications
              about our Services, subject to your right to control whether we do so.
						</p>
						<p>
              We analyze how users interact with our Site so we can understand better what elements
              of the design are working well and which are not working so well. This allows us to
              improve and develop the quality of the online experience we offer all our users.
						</p>
					</li>
				</ul>
			</React.Fragment>
		),
	},
	{
		title: 'How This Information Is Shared',
		id: ANCHORS.HOW_SHARE,
		text: null,
	},
	{
		id: ANCHORS.SHARED_PUBLICY,
		title: null,
		text: (
			<React.Fragment>
				<p>
					<strong> Information that’s shared publicly</strong>
					<span>
            When you create an account, we create a basic profile page for you on Double Dog,
            containing your username, the date the account was created, and a list of dares you
            have funded or delivered. Your profile is private. Your username appears with dares
            you create or claim on Double Dog.
					</span>
				</p>
				<p>
          Creators are also asked to verify their identities before claiming a dare. Once this
          has been done, the creator’s Verified Name will be publicly displayed on their account
          profile and on any dares they create or claim.
				</p>
			</React.Fragment>
		),
	},
	{
		title: null,
		id: ANCHORS.NOT_SHARED_PUBLICY,
		text: (
			<React.Fragment>
				<p>
					<strong> Information that isn’t shared publicly</strong>
					<span>The following data will not be publicly displayed or revealed to other users:</span>
				</p>
				<ul className={classes.list}>
					<li>Any payment information you provide;</li>
					<li>Your password details;</li>
					<li>Your IP address;</li>
					<li>Your phone number;</li>
					<li>
            Your date of birth and other identity verification documentation (for creators); and
					</li>
					<li>
            Communications you send to us (for example, when you ask for support, send us questions
            or comments, or report a problem).
					</li>
				</ul>
			</React.Fragment>
		),
	},
	{
		title: null,
		id: ANCHORS.SHARED_WITH_TRUSTED,
		text: (
			<p>
				<strong>Information that’s shared with trusted third-party services</strong>
				<span>
          We may share your information with certain trusted third-party services to help us
          provide, improve, promote, or protect Double Dog’s Services (like when we partner with
          payment processors, or use services that help us manage our ads on other sites). When we
          share data with third-party services that support our delivery of the Double Dog Services,
          we require that they use your information only for the purposes we’ve authorized, and that
          they protect your personal information at least to the same standards we do. We may also
          share information that’s aggregated and anonymized in a way that it doesn’t directly
          identify you.
				</span>
			</p>
		),
	},
	{
		title: null,
		id: ANCHORS.SHARED_WITH_CREATORS,
		text: (
			<React.Fragment>
				<p>
					<strong>Information that’s shared with creators and collaborators</strong>
					<span>
            When you back a dare, the dare’s deliverer will know your username, and the amount
            you have pledged. Deliverers never receive backers’ credit card details or other payment
            information.
					</span>
				</p>
				<p>
          If a dare you have backed is successfully funded, the creator will receive the email
          address associated with your Double Dog account. They may also send you a survey
          requesting information needed to provide any reward. (For instance, they may need your
          mailing address, or T-shirt size.) Any information you provide in such surveys will be
          received by the deliverer.
				</p>
				<p>
          Deliverers are required to keep backer information confidential, except as strictly
          necessary to communicate with backers directly and fulfill rewards. Delverers should not
          ask for personal information that isn’t necessary to provide your reward, and should never
          request sensitive personal information such as your Social Security number or payment
          information. Contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> if you receive a request for information
          that seems inappropriate or excessive
				</p>
				<p>
          Collaborators are third parties that deliverers can appoint to help manage their dare.
          These collaborators may be able to access the information available to deliverers
          (including backers’ names, email addresses, pledge amounts, messages, and survey
          responses), and are required to treat backers’ personal information with the same care and
          respect as deliverers are.
				</p>
				<p>
          Deliverers and their collaborators may also receive routine traffic analytics about their
          dare pages.
				</p>
			</React.Fragment>
		),
	},
	{
		title: null,
		id: ANCHORS.SHARED_WITH_DOUBLE_DOG,
		text: (
			<p>
				<strong>Information that’s shared to protect Double Dog and comply with the law</strong>
				<span>
          We do reserve the right to disclose personal information when we believe that doing so is
          reasonably necessary to comply with the law or law enforcement, to prevent fraud or abuse,
          or to protect Double Dog’s legal rights, property, or the safety of Double Dog, its
          employees, users, or others.
				</span>
			</p>
		),
	},
	{
		title: 'TOS for Links',
		id: ANCHORS.LINKS_TO_SERVICE,
		text: (
			<p>
				<strong>Links to other websites and services</strong>
				<span>
          Our Site may include links to other websites or services whose privacy practices may
          differ from Double Dog’s. When you use a link to an external site or service, the privacy
          policy and data processing disclosures for that site or service governs.
				</span>
			</p>
		),
	},
	{
		title: 'Data Retention',
		id: ANCHORS.RETENTION,
		text: (
			<React.Fragment>
				<p>
          We will retain your information as long as your account is active, as necessary to provide
          you with the Services or as otherwise set forth in this Policy. We will also retain and
          use this information as necessary for the purposes set out in this Policy and to the
          extent necessary to comply with our legal obligations, resolve disputes, enforce our
          agreements and protect Double Dog’s legal rights.
				</p>
				<p>
          We also collect and maintain aggregated, anonymized or pseudonymized information which we
          may retain indefinitely to protect the safety and security of our Site, improve our
          Services or comply with legal obligations.
				</p>
			</React.Fragment>
		),
	},
	{
		title: 'Data Transfers',
		id: ANCHORS.DATA_TRANSFER,
		text: (
			<p>
        Because Double Dog is a US-based company, your information will be collected and processed
        in the United States. The United States has its own laws governing data protection and
        government access to information. The rules that protect your personal information under
        United States law may be different than in your home country. If you choose to use the
        Services, you need to agree to our Terms of Use, which set out the contract between Double
        Dog and its users.
			</p>
		),
	},
	{
		title: 'Your Rights',
		id: ANCHORS.RIGHTS,
		text: (
			<React.Fragment>
				<p>
          Users residing in certain countries, including the EU, are afforded certain rights
          regarding their personal information. Except where an exception or exemption applies,
          these rights include the ability to access, correct, and request deletion of your personal
          information. These rights are not applicable globally.
				</p>
				<p>
          You can request a downloadable copy of your personal data from Double Dog from your
          account settings page. To modify or delete the personal information you’ve provided to us,
          please log in and update your profile. We may retain certain information as required by
          law or as necessary for our legitimate business purposes.
				</p>
			</React.Fragment>
		),
	},
	{
		title: 'Email and Mobile Notifications',
		id: ANCHORS.NOTIFICATION,
		text: (
			<React.Fragment>
				<p>
          We want to communicate with you only if you want to hear from us. We try to keep emails to
          a minimum and give you the ability to opt in to any marketing communications we send.
				</p>
				<p>
          We will send you email relating to your transactions on Double Dog. You may also elect to
          receive certain marketing email communications, in accordance with your preferences, and
          from which you may opt out at any time. We’ll also send you service-related announcements
          when it’s necessary to do so.
				</p>
			</React.Fragment>
		),
	},
	{
		title: 'Security',
		id: ANCHORS.SECURE,
		text: (
			<React.Fragment>
				<p>
          We take security seriously, and the security of your personal data is important to us. We
          follow industry-standard practices to protect the data we collect and maintain, including
          using Transport Layer Security (TLS) to encrypt information as it travels over the
          internet. No method of transmission over the internet or electronic storage is completely
          secure, so Double Dog cannot guarantee its absolute security. Your account information is
          protected by a password, which you should choose carefully and keep secure.
				</p>
				<p>
          We encourage the responsible disclosure of vulnerabilities of our Services by emailing {' '}
					<a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
				</p>
			</React.Fragment>
		),
	},
	{
		title: 'Data Protection Officer',
		id: ANCHORS.DATA_PROTECT_OFFICER,
		text: (
			<React.Fragment>
				<p>To contact our Data Protection Officer, please email Support@DoubleDog.com.</p>
				<span>You can contact us in writing at:</span>
				<br />
				<span>Double Dog</span> <span>320 W 38th st., 1122 </span>
				<br />
				<span>New York, NY 10018 </span>
				<br />
				<span>USA</span>
				<br />
			</React.Fragment>
		),
	},
	{
		title: 'Data Protection Authority',
		id: ANCHORS.DATA_PROTECT_AUTHORITY,
		text: (
			<p>
				<span>
          Subject to applicable law, if you are a citizen or resident of the European Economic Area,
          you also have the right to (i) object to Double Dog’s use of your personal information and
          (ii) lodge a complaint with your local data protection authority or the United Kingdom
          Information Commissioner’s Office, which is Double Dog’s lead supervisory authority in the
          European Union.
				</span>
				<br />
				<span>United Kingdom Information Commissioner’s Office</span>
				<br />
				<span>Wycliffe House, Water Lane, Wilmslow, Cheshire</span>
				<br />
				<span>SK9 5AF, United Kingdom</span>
				<br />
				<span>Telephone: +0303 123 1113</span>
				<br />
				<span>Fax: 01625 524510</span>
				<br />
				<span>
          Web:{' '}
					<a href="https://ico.org.uk/global/contact-us/">https://ico.org.uk/global/contact-us/</a>
				</span>
			</p>
		),
	},
	{
		title: 'Children',
		id: ANCHORS.CHILDREN,
		text: (
			<React.Fragment>
				<p>
          People under 18 (or the legal age in your jurisdiction) are not permitted to use Double
          Dog on their own. Double Dog does not knowingly collect any personal information from
          children under the age of 13 and children under 13 are not permitted to register for an
          account or use our Services.
				</p>
				<p>
          If you believe that a child has provided us with personal information, please contact us
          at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. If we become aware
          that a child under age 13 has provided us with personally identifiable information, we’ll
          delete it.
				</p>
				<p>
					<i>Updated: Feb 2019</i>
				</p>
			</React.Fragment>
		),
	},
]

export default pageContent

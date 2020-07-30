import EngineGif from './Engine.gif';
import Battery from './Battery.jpg';
import Installation from './Installation.jpg';
import Repair from './Repair.jpg';
import Tow from './Tow.jpg';

export const ArticleText = [
	/* [0] => About Us */
	{
		title: 'HS Auto & Trucking Services',
		image: EngineGif,
		paragraphs: [
			`At HS Auto, you can relax knowing we will get the job done with anything that your vehicle needs. We
            handle anything from oil changes, filter changes, battery replacements, auto body upgrades, engine
            installations, car diagnostics, and more.`,
			`Ever since 2010, we at HS Auto have always been providing our friends with trustworthy, professional
            vehicle repair and trucking services at a industry-standard quality. No matter how small the deed is
            or how big the job is, you can count on us to get done right and quick enough to get you back on the
            road again.`,
			`Tune-ups, engine installations, oil changes, parts assembly, or towing requests, it doesn't matter.
            Our technicians take pride in their work to make sure we give you a quality service while saving
            time and money.`
		]
	},
	/* [1] => Services */
	{
		autorepair: {
			title: 'Auto Repair',
			image: Repair,
			paragraphs: [
				`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				`Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
			]
		},

		autobody: {
			title: 'Auto Body',
			image: Installation,
			paragraphs: [
				`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				`Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
			]
		},

		battery: {
			title: 'Battery & Car Diagnostics',
			image: Battery,
			paragraphs: [
				`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				`Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
			]
		},

		emergency: {
			title: 'Emergency & Towing Service',
			image: Tow,
			paragraphs: [
				`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				`Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
			]
		}
	}
];

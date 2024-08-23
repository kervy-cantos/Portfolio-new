import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	iconv,
	tesla,
	shopify,
	carrent,
	mariThreads,
	jobit,
	tripguide,
	threejs,
	wordpress,
	uniposapp,
	ggss
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About'
	},
	{
		id: 'work',
		title: 'Work'
	},
	{
		id: 'contact',
		title: 'Contact'
	}
];

const services = [
	{
		title: 'Wordpress Developer',
		icon: web
	},
	{
		title: 'Frontend Developer',
		icon: mobile
	},
	{
		title: 'Backend Developer',
		icon: backend
	},
	{
		title: 'Flutter Developer',
		icon: creator
	}
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html
	},
	{
		name: 'CSS 3',
		icon: css
	},
	{
		name: 'JavaScript',
		icon: javascript
	},
	{
		name: 'TypeScript',
		icon: typescript
	},
	{
		name: 'React JS',
		icon: reactjs
	},
	{
		name: 'Redux Toolkit',
		icon: redux
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind
	},
	{
		name: 'Node JS',
		icon: nodejs
	},
	{
		name: 'MongoDB',
		icon: mongodb
	},
	{
		name: 'Three JS',
		icon: threejs
	},
	{
		name: 'git',
		icon: git
	},
	{
		name: 'figma',
		icon: figma
	},
	{
		name: 'docker',
		icon: docker
	}
];

const experiences = [
	{
		title: 'Web Developer',
		company_name: 'Freelance',
		icon: wordpress,
		iconBg: '#E6DEDD',
		date: 'Jan 2021 - Feb 2022',
		points: [
			'Developing and maintaining web applications Codeigniter and Wordpress.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.'
		]
	},
	{
		title: 'Jr. Software Engineer',
		company_name: 'Volenday',
		icon: iconv,
		iconBg: '#E6DEDD',
		date: 'Feb 2023 - April 2021',
		points: [
			'Developing and maintaining web applications using NextJs and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.'
		]
	}
];

const testimonials = [
	{
		testimonial:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Sample Corp',
		image: 'https://randomuser.me/api/portraits/women/4.jpg'
	},
	{
		testimonial:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		name: 'Chris Brown',
		designation: 'COO',
		company: 'Sample Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg'
	},
	{
		testimonial:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		name: 'Lisa Wang',
		designation: 'CTO',
		company: 'Sample Corp',
		image: 'https://randomuser.me/api/portraits/women/6.jpg'
	}
];

const projects = [
	{
		name: 'Mari Threads',
		description:
			'Threads clone app that allows users to create and share threads, follow other users, and engage with their content.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient'
			},
			{
				name: 'supabase',
				color: 'green-text-gradient'
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient'
			}
		],
		image: mariThreads,
		source_code_link: 'https://github.com/'
	},
	{
		name: 'UNI pos',
		description:
			'A POS system that allows users to manage their inventory, track sales, and print receipts for their business.',
		tags: [
			{
				name: 'expo',
				color: 'blue-text-gradient'
			},
			{
				name: 'react-native',
				color: 'green-text-gradient'
			},
			{
				name: 'eas',
				color: 'pink-text-gradient'
			}
		],
		image: uniposapp,
		source_code_link: 'https://github.com/kervy-cantos/UNIPOS'
	},
	{
		name: 'Brochure Website',
		description:
			'Websites typically used for brand awareness and marketing purposes rather than interactive functions or e-commerce',
		tags: [
			{
				name: 'wordpress',
				color: 'blue-text-gradient'
			},
			{
				name: 'css',
				color: 'green-text-gradient'
			},
			{
				name: 'cpanel',
				color: 'pink-text-gradient'
			}
		],
		image: ggss,
		source_code_link: 'https://github.com/kervy-cantos'
	}
];

export { services, technologies, experiences, testimonials, projects };

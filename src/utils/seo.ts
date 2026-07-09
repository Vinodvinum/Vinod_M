export const siteConfig = {
	siteUrl: 'https://vinod-ai.me',
	name: 'Vinod M',
	commonNames: ['Vinod', 'Vinu', 'Vinod M', 'Vinu M'],
	location: 'Mysuru, Karnataka, India',
	locationVariants: ['Mysuru', 'Mysuru, Karnataka', 'Mysore', 'Hootgalli', 'Karnataka, India'],
	email: 'sanatanivinodmnayak@gmail.com',
	github: 'https://github.com/Vinodvinum',
	githubReadme: 'https://github.com/Vinodvinum/Vinodvinum',
	linkedin: 'https://www.linkedin.com/in/vinod-m-b830061ba',
	sameAs: [
		'https://github.com/Vinodvinum',
		'https://github.com/Vinodvinum/Vinodvinum',
		'https://www.linkedin.com/in/vinod-m-b830061ba',
		'https://vinod-ai.me',
	],
	expertise: [
		'Artificial Intelligence',
		'Machine Learning',
		'Deep Learning',
		'Data Science',
		'Data Analytics',
		'Business Analytics',
		'Business Intelligence',
		'Power BI',
		'SQL',
		'Python',
		'Generative AI',
		'Large Language Models',
		'AI Agents',
		'AI Automation',
		'NLP',
		'Computer Vision',
		'MLOps',
		'Data Engineering',
		'Analytics Engineering',
		'Full Stack Development',
		'Software Engineering',
		'Cloud Computing',
		'Automation Engineering',
		'Entrepreneurship',
		'Technology Consulting',
		'Research',
	],
} as const;

export type SchemaObject = Record<string, unknown>;

export type BreadcrumbItem = {
	name: string;
	item: string;
};

export function absoluteUrl(pathname = '/') {
	return new URL(pathname, siteConfig.siteUrl).toString();
}

export function buildWebsiteSchema(title: string, description: string, pathname = '/') : SchemaObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: title,
		description,
		url: absoluteUrl(pathname),
		inLanguage: 'en-IN',
		publisher: {
			'@type': 'Person',
			name: siteConfig.name,
			url: absoluteUrl('/'),
		},
		potentialAction: {
			'@type': 'SearchAction',
			target: `${siteConfig.siteUrl}/blog?q={search_term_string}`,
			'query-input': 'required name=search_term_string',
		},
	};
}

export function buildPersonSchema(description: string, pathname = '/') : SchemaObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: siteConfig.name,
		alternateName: siteConfig.commonNames,
		description,
		url: absoluteUrl(pathname),
		image: absoluteUrl('/images/profile.jpg'),
		jobTitle: 'AI, Data Analytics, and Software Engineering Professional',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Mysuru',
			addressRegion: 'Karnataka',
			addressCountry: 'IN',
		},
		homeLocation: {
			'@type': 'Place',
			name: siteConfig.location,
		},
		knowsAbout: siteConfig.expertise,
		sameAs: siteConfig.sameAs,
	};
}

export function buildOrganizationSchema(description: string, pathname = '/') : SchemaObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Vinod M Personal Brand',
		url: absoluteUrl(pathname),
		logo: absoluteUrl('/images/profile.jpg'),
		description,
		sameAs: siteConfig.sameAs,
	};
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): SchemaObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.item,
		})),
	};
}

export type ProjectSchemaInput = {
	name: string;
	description: string;
	url: string;
	sameAs?: string[];
};

export function buildProjectSchema(project: ProjectSchemaInput): SchemaObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'Project',
		name: project.name,
		description: project.description,
		url: project.url,
		creator: {
			'@type': 'Person',
			name: siteConfig.name,
			url: absoluteUrl('/'),
		},
		sameAs: project.sameAs ?? [],
	};
}

export type BlogPostingInput = {
	title: string;
	description: string;
	pathname: string;
	articleSection?: string;
	keywords?: string[];
};

export function buildBlogPostingSchema(post: BlogPostingInput): SchemaObject {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		url: absoluteUrl(post.pathname),
		mainEntityOfPage: absoluteUrl(post.pathname),
		author: {
			'@type': 'Person',
			name: siteConfig.name,
			url: absoluteUrl('/'),
		},
		publisher: {
			'@type': 'Person',
			name: siteConfig.name,
			url: absoluteUrl('/'),
		},
		articleSection: post.articleSection ?? 'SEO Strategy',
		keywords: post.keywords ?? siteConfig.expertise,
		inLanguage: 'en-IN',
	};
}

export function schemaToJson(schema: SchemaObject) {
	return JSON.stringify(schema);
}

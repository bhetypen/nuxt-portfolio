export type ProjectCategory = 'fullstack' | 'frontend'

export interface Project {
    slug: string
    title: string
    category: ProjectCategory
    logo: string          // /logos/...
    img: string           // /images/... (cover on detail page)
    url?: string          // live demo / public site
    description: string   // short summary (grid + detail)
    long?: string         // longer text for detail page
    tech: string[]
    images?: string[]     // gallery images for detail page
    repoUrl?: string      // if public
    repoPrivate?: boolean // show a “Private repo” badge
}

export const projects: Project[] = [
    // ========= Fullstack =========
    {
        slug: 'localmarktplatz',
        title: 'LocalMarktplatz (ongoing)',
        category: 'fullstack',
        logo: '/logos/localmarkt.png',
        img: '/images/localmarkt-cover.png',
        description:
            'Full-stack platform for managing local markets, vendors, and stalls. Features drag-and-drop stall planning, event management, and secure organizer/vendor dashboards.',
        long:
            'LocalMarktplatz is an interactive marketplace application for organizers and vendors. The frontend is built with React + Konva.js and Next.js with responsive layouts and drag-and-drop stall management. The backend runs on Node.js + Postgre SQL. Key features include secure JWT authentication, role-based access (organizer/vendor/admin), billing & application management, real-time chat/notifications via Socket.io, and public landing pages for organizers. Additional highlights: Google Maps integration, integrated mailing service. Repo is private (available on request).',
        tech: [
            'React',
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB',
            'Google Maps',
            'JWT',
            'Figma',
            'Socket.io',
            'Swagger',
        ],
        repoPrivate: true,
        images: [
            '/images/localmarkt-cover.png',
            // add more screenshots here
        ],
    },
    {
        slug: 'ecommerce-api',
        title: 'E-Commerce API (completed)',
        category: 'fullstack',
        logo: '/logos/ecommerce.png',
        img: '/images/ecommercesite.png',
        url: 'http://zuitt-bootcamp-prod-561-9032-penetzdorfer.s3-website.us-east-1.amazonaws.com/',
        description:
            'REST API for products, cart & checkout with authentication and roles.',
        long:
            'Backend: Node.js, Express, MongoDB. Security: login, role management (admin/user), password workflow. Deployment: AWS Lambda + API Gateway. Docs: Postman.',
        tech: ['Node.js', 'Express', 'MongoDB', 'AWS Lambda', 'API Gateway', 'Postman'],
        images: ['/images/ecommercesite.png'],
    },
    {
        slug: 'airline-booking-system',
        title: 'Airline Booking System (in development)',
        category: 'fullstack',
        logo: '/logos/airline.png',
        img: '/images/airline-cover.png',
        description:
            'Planned full-stack app with search, booking and payments.',
        long:
            'Frontend: Vue.js (wireframes in Figma). Backend: Node.js + Express. Database: MongoDB. Deployment: AWS (planned).',
        tech: ['Vue', 'Node.js', 'Express', 'MongoDB', 'Figma', 'AWS (planned)'],
        repoPrivate: true,
        images: ['/images/airline-cover.png'],
    },

    // ========= Frontend =========
    {
        slug: 'quiz-app',
        title: 'Quiz App (Vanilla JS)',
        category: 'frontend',
        logo: '/logos/quiz.png',
        img: '/images/quiz-cover.png',
        url: 'https://quize.bhetycodes.com/',
        description:
            'Learning app with interactive quiz logic and responsive UI.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        images: ['/images/quiz-cover.png'],
    },
    {
        slug: 'portfolio-website',
        title: 'Portfolio Website (Vanilla JS)',
        category: 'frontend',
        logo: '/logos/portfolio.png',
        img: '/images/portfolio-cover.png',
        url: 'https://bhetypen.github.io/webportfolio',
        description:
            'Personal portfolio with responsive landing page.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        images: ['/images/portfolio-cover.png'],
    },
    {
        slug: 'html-css-showcase',
        title: 'HTML & CSS Showcase (Coders Bay)',
        category: 'frontend',
        logo: '/logos/htmlcss.png',
        img: '/images/htmlcss-cover.png',
        url: 'https://codersbay-html-css-3.bhetycodeport.tech',
        description:
            'Classic layout project with CSS Grid & responsiveness.',
        tech: ['HTML', 'CSS', 'Grid/Flexbox'],
        images: ['/images/htmlcss-cover.png'],
    },
    {
        slug: 'dexplore',
        title: 'Dexplore (Vanilla JS)',
        category: 'frontend',
        logo: '/logos/dexplore.png',
        img: '/images/dexplore-cover.png',
        url: 'https://dexplore.bhetycodes.com',
        description:
            'API-based search and display app.',
        tech: ['JavaScript', 'HTML', 'CSS', 'REST API'],
        images: ['/images/dexplore-cover.png'],
    },
    {
        slug: 'nocode-website-builder',
        title: 'No-Code Website Builder (React)',
        category: 'frontend',
        logo: '/logos/nocode.png',
        img: '/images/nocode-cover.png',
        url: 'https://nocodewebsitebuilder.bhetycodeport.tech/',
        description:
            'Experimental static website builder with visual UI; runs fully in the browser.',
        tech: ['React', 'IndexedDB', 'Tailwind', 'CSS'],
        images: ['/images/nocode-cover.png'],
    }

]

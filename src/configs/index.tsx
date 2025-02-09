import { ISidebarItem } from "@/types/config"

export const siteConfig = {
    seo: {
        title: "@nhatnguyen",
        description: "@nhatnguyen",
        openGraph: {
            locale: 'en_US',
            alternateLocale: ['vi_VN'],
            type: 'website',
            siteName: 'Bigboy Restaurant',
            images: [
                {
                    url: `/banner.png`
                }
            ]
        }
    },
    paths: {
        home: {
            href: '/',
            as: 'Home'
        },
        caseStudies: {
            href: '/case-studies',
            as: 'Case Studies'
        },
        about: {
            href: '/about',
            as: 'About'
        },
    },
    contact: {
        linkedin: {
            href: 'https://www.linkedin.com/in/nhatwork',
            as: 'Linkedin'
        },
        email: {
            href: 'mailto:nhatnguyen.wk@gmail.com',
            as: 'nhatnguyen.wk@gmail.com'
        },
        behance: {
            href: 'https://www.behance.net/nhat_nguyen_work',
            as: 'Behance'
        },
        dribble: {
            href: 'https://dribbble.com/nhatnguyen_wk',
            as: 'Dribble'
        },
        resume: {
            href: 'https://drive.google.com/file/d/1NtQrQSp3dCASxeqFD2CXemCV07IPNSOZ/view?usp=drive_link',
            as: 'My Resume'
        }
    },
    url: 'http://jamesnguyendesign.com',
    mobileWidth: '(max-width: 640px)',
    pageList: {
        home: {
            href: '/',
            as: 'Home'
        },
        caseStudies: {
            href: '/case-studies',
            as: 'Case Studies',
        },
        vpBank: {
            href: '/case-studies/vp-bank',
            as: 'VP Bank'
        },
        waveB: {
            href: '/case-studies/wave-b',
            as: 'Wave B'
        },
        about: {
            href: '/about',
            as: 'About'
        },
        projectHighlights: {
            href: '/project-highlights',
            as: 'Project Highlights'
        },
        washUp: {
            href: '/wash-up',
            as: 'Wash Up',
        },
        insuranceFeature: {
            href: '/project-highlights/wash-up/insurance-feature',
            as: 'Washup - Insurance feature'
        },
        technicianApp: {
            href: '/project-highlights/wash-up/technician-app',
            as: 'Washup - Technician app'
        },
        technicianOrder: {
            href: '/project-highlights/wash-up/technician-order',
            as: 'Washup - Technician order'
        },
        vehicleWashApp: {
            href: '/project-highlights/wash-up/vehicle-wash-app',
            as: 'Washup - Vehicle wash app'
        },
        dakoli: {
            href: '/dakoli',
            as: 'Dakoli',
        },
        setKey: {
            href: '/api/set-key',
            as: 'Set Key'
        }
    }
}



export const SidebarItems: ISidebarItem[] = [
    {
        id: 'home',
        href: siteConfig.pageList.home.href,
        status: {
            normal: {
                icon: '/home/icons/ha.svg',
                alt: 'Home'
            },
            hover: {
                icon: '/home/icons/hh.svg',
                alt: 'Home'
            },
            active: {
                icon: '/home/icons/hn.svg',
                alt: 'Home'
            },
        }
    },
    {
        id: 'projectHighlights',
        href: siteConfig.pageList.projectHighlights.href,
        status: {
            normal: {
                icon: '/home/icons/ba.svg',
                alt: 'Home'
            },
            hover: {
                icon: '/home/icons/bh.svg',
                alt: 'Home'
            },
            active: {
                icon: '/home/icons/bn.svg',
                alt: 'Home'
            },
        }
    },
    {
        id: 'caseStudies',
        href: siteConfig.pageList.caseStudies.href,
        status: {
            normal: {
                icon: '/home/icons/la.svg',
                alt: 'Home'
            },
            hover: {
                icon: '/home/icons/lh.svg',
                alt: 'Home'
            },
            active: {
                icon: '/home/icons/ln.svg',
                alt: 'Home'
            },
        }
    },
    {
        id: 'about',
        href: siteConfig.pageList.about.href,
        status: {
            normal: {
                icon: '/home/icons/cn.svg',
                alt: 'Home'
            },
            hover: {
                icon: '/home/icons/ch.svg',
                alt: 'Home'
            },
            active: {
                icon: '/home/icons/ca.svg',
                alt: 'Home'
            },
        }
    },
]

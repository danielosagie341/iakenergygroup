import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { handleServiceClick as handleServiceClickUtil } from '../utils/serviceUtils';
import anchorWhite from '../assets/images/anchorWhite.svg';
import bulbWhite from '../assets/images/bulbWhite.svg';
import barrelWhite from '../assets/images/barrelWhite.svg';
import precisionWhite from '../assets/images/precisionWhite.svg';
import plugWhite from '../assets/images/plugWhite.svg';
import boxWhite from '../assets/images/boxWhite.svg';
import busWhite from '../assets/images/busWhite.svg';
import upstreamImage from '../assets/images/upstreamImage.svg';
import notebook from '../assets/images/notebook.svg';
import drum from '../assets/images/drum.svg';
import globalSearch from '../assets/images/global-search.svg';
import operations from '../assets/images/operations.svg';
import healtcare from '../assets/images/healtcare.svg';
import mainstreamImage from '../assets/images/mainstreamImage.svg';
import gasPipe from '../assets/images/gas-pipe.svg';
import store from '../assets/images/store.svg';
import fuelStation from '../assets/images/fuel-station.svg';
import desert from '../assets/images/desert.svg';
import tankerTruck from '../assets/images/tanker-truck.svg';
import downstreamImage from '../assets/images/downstreamImage.svg';
import innovationImage from '../assets/images/innovationImage.svg';
import fire from '../assets/images/fire.svg';
import infrastructure from '../assets/images/infrastructure.svg';
import power from '../assets/images/power.svg';
import lightning from '../assets/images/lightning.svg';
import battery from '../assets/images/battery.svg';
import worker from '../assets/images/worker.svg';
import epccImage from '../assets/images/epccImage.svg';
import marineLogisticsImage from '../assets/images/marineLogisticsImage.svg';
import globe from '../assets/images/globe.svg';
import bus from '../assets/images/busWhite.svg';
import box from '../assets/images/boxWhite.svg';
import anchor from '../assets/images/anchor.svg';

// Define interfaces for our data structures
interface Capability {
  icon: string;
  title: string;
  description: string;
}

interface ServiceDetails {
  iconSrc: string;
  title: string;
  subtitle: string;
  image: string;
  overview: string;
  link: string;
  capabilities: Capability[];
}

interface ServiceData {
  [key: string]: ServiceDetails;
}

interface Service {
    id: string;
    iconSrc: string;
    title: string;
    description: string;
    link: string;
}

// interface IconPlaceholderProps {
//     iconName: string;
//     className?: string;
//     size?: string;
// }

interface ServiceCardProps {
    service: Service;
    onClick: (id: string) => void;
}

// Mock service data with detailed information
const serviceData: ServiceData = {
  'Upstream Exploration': {
    iconSrc: barrelWhite,
    title: 'Upstream Exploration & Production',
    subtitle: 'Advanced extraction techniques customized to maximize hydrocarbon yields while adhering safety and environmental standards.',
    image: upstreamImage,
    overview: 'Our upstream services focus on maximizing hydrocarbon recovery with world-class technology and deep expertise. We deliver reservoir engineering, drilling optimization, and production enhancement solutions that improve efficiency, safety, and sustainability—ensuring African energy potential is responsibly harnessed for long-term growth.',
    link: '/services#upstream-exploration',
    capabilities: [
      {
        icon: drum,
        title: 'Reservoir Development',
        description: 'Optimized field planning to increase yield and reduce downtime.'
      },
      {
        icon: globalSearch,
        title: 'Exploration & Drilling',
        description: 'Advanced seismic surveys and drilling operations across onshore and offshore fields.'
      },
      {
        icon: operations,
        title: 'Production Operations',
        description: 'Integrated systems to ensure safe, continuous, and cost-effective output.'
      },
      {
        icon: healtcare,
        title: 'Health, Safety & Environment (HSE)',
        description: 'Globally certified standards to protect people and the environment..'
      },
      {
        icon: notebook,
        title: 'Technical Advisory',
        description: 'Expertise in project planning, risk assessment, and asset management.'
      }
    ]
  },
  'Midstream Infrastructure': {
    iconSrc: busWhite,
    title: 'Midstream Infrastructure',
    subtitle: 'Infrastructure design and deployment ensuring seamless, reliable energy flow from origin to processing.',
    image: mainstreamImage,
    overview: 'Our Midstream services focus on the transportation, processing, and storage of hydrocarbons across Africa. From pipelines to storage terminals, we build and operate infrastructure that ensures resources flow seamlessly from production fields to refineries and power plants—supporting industrial growth and energy access.',
    link: '/services#upstream-exploration',
    capabilities: [
      {
        icon: gasPipe,
        title: 'Pipeline Construction & Operations',
        description: 'Design, build, and maintain cost-effective pipelines for crude oil, gas, and refined products.'
      },
      {
        icon: store,
        title: 'Storage & Terminals',
        description: 'Modern tank farms and storage facilities ensuring reliable supply chains.'
      },
      {
        icon: fuelStation,
        title: 'Gas Processing & Compression',
        description: 'Converting natural gas for efficient transport and distribution.'
      },
      {
        icon: tankerTruck,
        title: 'Transportation & Logistics',
        description: 'Tanker trucks, barges, and virtual pipeline systems for flexible delivery.'
      },
      {
        icon: desert,
        title: 'HSE & Compliance',
        description: 'Meeting global safety and environmental standards in all midstream operations.'
      }
    ]
  },
  'Downstream-Marketing': {
    iconSrc: boxWhite,
    title: 'Downstream & Marketing',
    subtitle: 'Refining and supplying premium fuels and petrochemicals optimized for global markets and commercial applications.',
    image: downstreamImage,
    overview: 'Our Downstream & Marketing services ensure that Africa’s energy resources are refined, distributed, and delivered efficiently to businesses and households. From fuel refining to petrochemicals and retail distribution, we create value chains that drive industrial growth, energy security, and everyday access to reliable energy solutions.',
    link: '/services#upstream-exploration',
    capabilities: [
      {
        icon: fire,
        title: 'Refining & Processing',
        description: 'Converting crude oil into high-quality fuels and petrochemicals.'
      },
      {
        icon: fuelStation,
        title: 'Fuel Distribution & Retail',
        description: 'Supplying petrol, diesel, LPG, and other products through retail and bulk channels.'
      },
      {
        icon: store,
        title: 'Commercial Supply & Marketing',
        description: 'Tailored energy solutions for industries, businesses, and governments.'
      },
      {
        icon: tankerTruck,
        title: 'Logistics & Delivery',
        description: 'Efficient transport networks ensuring reliable supply across regions.'
      },
      {
        icon: healtcare,
        title: 'Sustainability & Standards',
        description: 'Commitment to eco-friendly practices and ISO-certified operations.'
      }
    ]
  },
  'Power Generation': {
    iconSrc: plugWhite,
    title: 'Power Generation',
    subtitle: 'End-to-end power solutions—from planning to commissioning—tailored for scalability, efficiency, and carbon-conscious operation.',
    image: power,
    overview: 'Our Power Generation services provide scalable, innovative energy solutions that meet Africa’s growing demand for electricity. From gas-fired plants to renewable energy projects, we design, build, and operate power infrastructure that drives industrialization, supports communities, and enhances energy security across the continent.',
    link: '/services#upstream-exploration',
    capabilities: [
      {
        icon: fire,
        title: 'Refining & Processing',
        description: 'Gas-Fired Power Plants'
      },
      {
        icon: box,
        title: 'Renewable Energy Solutions',
        description: 'Supplying petrol, diesel, LPG, and other products through retail and bulk channels.'
      },
      {
        icon: fuelStation,
        title: 'Operations & Maintenance (O&M)',
        description: 'Ensuring long-term performance, efficiency, and sustainability of plants.'
      },
      {
        icon: bus,
        title: 'Distributed & Off-Grid Systems',
        description: 'Mini-grids and decentralized energy for rural and underserved communities.'
      },
      {
        icon: desert,
        title: 'Engineering, Procurement & Construction (EPC)',
        description: 'End-to-end design, construction, and commissioning of power assets.'
      }
    ]
  },
  'Epcc': {
    iconSrc: precisionWhite,
    title: 'EPCC (Engineering, Procurement, Construction & Commissioning)',
    subtitle: 'End-to-end power solutions—from planning to commissioning—tailored for scalability, efficiency, and carbon-conscious operation.',
    image: epccImage,
    overview: 'Our Power Generation services provide scalable, innovative energy solutions that meet Africa’s growing demand for electricity. From gas-fired plants to renewable energy projects, we design, build, and operate power infrastructure that drives industrialization, supports communities, and enhances energy security across the continent.',
    link: '/services#upstream-exploration',
    capabilities: [
      {
        icon: fire,
        title: 'Refining & Processing',
        description: 'Gas-Fired Power Plants'
      },
      {
        icon: box,
        title: 'Renewable Energy Solutions',
        description: 'Supplying petrol, diesel, LPG, and other products through retail and bulk channels.'
      },
      {
        icon: fuelStation,
        title: 'Operations & Maintenance (O&M)',
        description: 'Ensuring long-term performance, efficiency, and sustainability of plants'
      },
      {
        icon: bus,
        title: 'Distributed & Off-Grid Systems',
        description: 'Mini-grids and decentralized energy for rural and underserved communities.'
      },
      {
        icon: desert,
        title: 'Engineering, Procurement & Construction (EPC)',
        description: 'End-to-end design, construction, and commissioning of power assets.'
      }
    ]
  },
  'Innovation-Technology': {
    iconSrc: precisionWhite,
    title: 'Innovation & Technology Integration',
    subtitle: 'Pioneering digital and clean energy technologies—like virtual pipelines—to enhance energy access and drive decarbonization.',
    image: innovationImage,
    overview: 'We drive technological advancement in Africa\'s energy sector through innovative solutions and digital transformation. Our focus on emerging technologies, data analytics, and clean energy integration helps optimize operations and accelerate the transition to sustainable energy systems.',
    link: '/services#upstream-exploration',
    capabilities: [
      {
        icon: fire,
        title: 'Refining & Processing',
        description: 'Gas-Fired Power Plants'
      },
      {
        icon: box,
        title: 'Renewable Energy Solutions',
        description: 'Supplying petrol, diesel, LPG, and other products through retail and bulk channels.'
      },
      {
        icon: fuelStation,
        title: 'Operations & Maintenance (O&M)',
        description: 'Ensuring long-term performance, efficiency, and sustainability of plants'
      },
      {
        icon: bus,
        title: 'Distributed & Off-Grid Systems',
        description: 'Mini-grids and decentralized energy for rural and underserved communities.'
      },
      {
        icon: desert,
        title: 'Engineering, Procurement & Construction (EPC)',
        description: 'End-to-end design, construction, and commissioning of power assets.'
      }
    ]
  },
  'Marine-Logistics': {
    iconSrc: anchorWhite,
    title: 'Marine Logistics & Vessel Charter',
    subtitle: 'Comprehensive maritime services for offshore operations and energy transportation across African waters.',
    image: marineLogisticsImage,
    overview: 'Our marine logistics services support offshore energy operations across Africa\'s coastlines. We provide vessel charter, marine transportation, and offshore support services that ensure safe, efficient movement of personnel, equipment, and energy products in challenging marine environments.',
    link: '/services#upstream-exploration',
    capabilities: [
      {
        icon: fire,
        title: 'Refining & Processing',
        description: 'Gas-Fired Power Plants'
      },
      {
        icon: box,
        title: 'Renewable Energy Solutions',
        description: 'Supplying petrol, diesel, LPG, and other products through retail and bulk channels.'
      },
      {
        icon: fuelStation,
        title: 'Operations & Maintenance (O&M)',
        description: 'Ensuring long-term performance, efficiency, and sustainability of plants'
      },
      {
        icon: bus,
        title: 'Distributed & Off-Grid Systems',
        description: 'Mini-grids and decentralized energy for rural and underserved communities.'
      },
      {
        icon: desert,
        title: 'Engineering, Procurement & Construction (EPC)',
        description: 'End-to-end design, construction, and commissioning of power assets.'
      }
    ]
  }
};


const ServiceCategorySection = () => {
  const [currentService, setCurrentService] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const services: Service[] = [
    {
      id: 'Upstream Exploration',
      iconSrc: barrelWhite,
      title: 'Upstream Exploration & Production',
      description: 'Advanced extraction techniques customized to maximize hydrocarbon yields while upholding safety and environmental standards.',
      link: 'Explore Our Upstream Series'
    },
    {
      id: 'Midstream Infrastructure',
      iconSrc: busWhite,
      title: 'Midstream Infrastructure',
      description: 'Infrastructure design and deployment ensuring seamless, reliable energy flow from origin to processing.',
      link: 'Explore Our Midstream Structure'
    },
    {
      id: 'Downstream-Marketing',
      iconSrc: boxWhite,
      title: 'Downstream & Marketing',
      description: 'Refining and supplying premium fuels and petrochemicals optimized for global markets and commercial applications.',
      link: 'Discover Our Downstream...'
    },
    {
      id: 'Power Generation',
      iconSrc: plugWhite,
      title: 'Power Generation',
      description: 'End-to-end power solutions—from planning to commissioning—tailored for scalability, efficiency, and carbon-conscious operation.',
      link: 'See How Our Power Works...'
    },
    {
      id: 'Epcc',
      iconSrc: precisionWhite,
      title: 'EPCC (Engineering, Procurement, Construction & Commissioning)',
      description: 'Delivering precision-engineered energy infrastructure with world-class safety and quality controls.',
      link: 'View Our EPCC Structures'
    },
    {
      id: 'Innovation-Technology',
      iconSrc: bulbWhite,
      title: 'Innovation & Technology Integration',
      description: 'Pioneering digital and clean energy technologies—like virtual pipelines—to enhance energy access and drive decarbonization.',
      link: 'Explore Our Tech Integrations'
    },
    {
      id: 'Marine-Logistics',
      iconSrc: anchorWhite,
      title: 'Marine Logistics & Vessel Charter',
      description: 'Pioneering digital and clean energy technologies—like virtual pipelines—to enhance energy access and drive decarbonization.',
      link: 'Discover Our Marine Logistics'
    },
  ];

const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 2));
    };

    const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / 2)) % Math.ceil(services.length / 2));
    };

    const handleServiceClick = (serviceId: string) => {
        handleServiceClickUtil(serviceId, setCurrentService);
    };

    const handleBackToServices = () => {
    setCurrentService(null);
    };

    // Icon component placeholder
    // const IconPlaceholder: React.FC<IconPlaceholderProps> = ({ iconName, className = "", size = "w-6 h-6" }) => (
    //     <div className={`${size} bg-blue-600 rounded ${className} flex items-center justify-center text-white text-xs font-bold`}>
    //     {iconName.slice(0, 2).toUpperCase()}
    //     </div>
    // );

    // Service Card Component
    const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => (
        <div 
        className="bg-white text-left shadow-md hover:shadow-lg transition-all duration-300 rounded-xl p-6 lg:p-10 space-y-4 cursor-pointer transform hover:scale-105"
        onClick={() => onClick(service.id)}
        >
        <div className="flex justify-start">
            <div className="w-16 h-16 bg-blue-100 rounded-full shadow-md flex items-center justify-center">
                <img src={service.iconSrc} alt={service.title} className="w-8 h-8" />
            </div>
        </div>
        
        <h3 className="text-lg lg:min-h-[80px] font-semibold text-blue-600">
            {service.title}
        </h3>
        
        <p className="text-sm lg:min-h-[100px] text-gray-600 leading-relaxed">
            {service.description}
        </p>

        <div className="text-red-600 hover:text-red-400 font-medium text-sm inline-flex items-center group">
            <span className="underline transition-colors duration-200">{service.link}</span>
        </div>
        </div>
    );

    if (currentService) {
        const service = serviceData[currentService];
        
        return (
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <button 
                        onClick={handleBackToServices}
                        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Services
                    </button>

                    {/* Main Content Container */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        {/* Header Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Content */}
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center">
                                        <img src={service.iconSrc} className="text-white" alt="icon" />
                                    </div>
                                    <h1 className="text-2xl lg:text-3xl font-bold text-blue-600">
                                        {service.title}
                                    </h1>
                                </div>
                                
                                <p className="text-gray-600 text-base lg:text-lg mb-12 leading-relaxed">
                                    {service.subtitle}
                                </p>

                                <div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mt-32">Overview</h2>
                                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                                        {service.overview}
                                    </p>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative lg:min-h-[500px]">
                                <div className="w-full h-64 lg:h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                                    <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
                                </div>
                            </div>
                        </div>

                        {/* Core Capabilities Section */}
                        <div className="p-8 lg:p-12 bg-gray-50">
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8">Core Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.capabilities.map((capability, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <img src={capability.icon} alt="icon" className="text-blue-600 w-6 h-6"/>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">{capability.title}</h3>
                                            <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">{capability.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-left mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Categories
            </h2>
            <p className="text-gray-600 md:text-lg lg:w-1/3 leading-relaxed">
                Guiding Values behind Our Dedication to powering Africa with Sustainable Energy
            </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-20">
            {services.map((service) => (
                <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={handleServiceClick}
                />
            ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden mb-20">
            <div className="relative overflow-hidden">
                <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                {Array.from({ length: Math.ceil(services.length / 2) }, (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
                    {services.slice(slideIndex * 2, slideIndex * 2 + 2).map((service) => (
                        <ServiceCard 
                        key={service.id} 
                        service={service} 
                        onClick={handleServiceClick}
                        />
                    ))}
                    </div>
                ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(services.length / 2) }, (_, index) => (
                    <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                    />
                ))}
                </div>
                
                <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
            </div>
            </div>


        </div>
        </section>
    );
};

export default ServiceCategorySection;
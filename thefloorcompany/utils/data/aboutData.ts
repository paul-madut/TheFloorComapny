type DataType = {
    id: number,
    image: string,
    tag: string,
    title: string,
    description: string,
    buttonText: string,
    buttonLink: string,
    alt: string

}[]

export const aboutData: DataType = [
    {
        id: 1,
        image: "/images/about/residential-garage-floors.jpg",
        tag: "Residential",
        title: "Garage Floors",
        description: "Garage Floors for Residential Homes",
        buttonText: "Learn More",
        buttonLink: "https://thefloorcompany.com/garage-floors",
        alt: "Garage Floors"
    },
    {
        id: 2,
        image: "/images/about/commercial-concrete-floors.jpg",
        tag: "Commercial",
        title: "Garage Floors",
        description: "Garage Floors for Commercial Properties",
        buttonText: "Learn More",
        buttonLink: "https://thefloorcompany.com/garage-floors",
        alt: "Garage Floors"
    },
    {
        id: 3,
        image: "images/about/retail-flooring.jpg",
        tag: "Products and Services",
        title: "Products and Services",
        description: "We offer a wide range of products and services to meet your needs",
        buttonText: "Learn More",
        buttonLink: "#",
        alt: "Products and Services"
    },
    {
        id: 4,
        image:"images/about/performance-flooring1.jpg" ,
        tag: "Gallery",
        title: "Gallery",
        description: "See our work in action",
        buttonText: "Learn More",
        buttonLink: "https://thefloorcompany.com/gallery",
        alt: "Gallery"
    }
]
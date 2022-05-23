var config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1Ijoia29hYyIsImEiOiJjbDBiODdhNnIwY250M2JyMWhtNTYzbzFzIn0.V_TrB97Gy9Jq54uohs1uUQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Kiyooka Ohe Arts Centre Sculpture Collection',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Ms. Chaudhry and Ms Yui',
    footer: 'Project for OSGEO ALBERTA.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Alex Caldwel, Castle, Steel',
            image: '.untitled folder/13 Alex Caldwell brdbath.jpeg',
            description: 'Alexander Caldwell, a former Katie Ohe sculpting student, constructed Castle after returning to Alberta after his first journey to Scotland to explore the country of his ancestors. Caldwell was captivated by the numerous beautiful castles around the UK and worked for many years to mimic the spirit of their architecture, constructing miniature, hefty steel castles. He gifted one to his instructor, Katie, and it currently displays on the eastern side of the KOAC Sculpture Garden.
                center: [-114.2771944, 51.06919444],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

import React from 'react';
import Banner from '@components/Banner/Banner';
import SectionHomeAboutUs from '@components/SectionHomeAboutUs/SectionHomeAboutUs';
import SectionHomeCollection from '@components/SectionHomeCollection/SectionHomeCollection';
import SectionHomeStores from '@components/SectionHomeStores/SectionHomeStores';

function HomePage() {
    return (
        <div>
            
            <Banner />
            <SectionHomeAboutUs/>
            <SectionHomeCollection/>
            <SectionHomeStores/>

            
        </div>
    );
}

export default HomePage;

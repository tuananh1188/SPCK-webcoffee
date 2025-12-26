import React from 'react';
import Banner from '@components/Banner/Banner';
import SectionHomeAboutUs from '@components/SectionHomeAboutUs/SectionHomeAboutUs';
import SectionHomeCollection from '@components/SectionHomeCollection/SectionHomeCollection';
import SectionHomeStores from '@components/SectionHomeStores/SectionHomeStores';
import SectionHomeInformation from '@components/SectionHomeInformation/SectionHomeInformation';

function HomePage() {
    return (
        <div className='home-container flex flex-col h-full'>
            <Banner />
            <SectionHomeAboutUs />
            <SectionHomeCollection />
            <SectionHomeStores />
            <SectionHomeInformation />
        </div>
    );
}

export default HomePage;

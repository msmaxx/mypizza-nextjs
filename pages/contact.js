import React from 'react';

import ContactSection from "../components/ContactSection";
import WorkTime from "../components/WorkTime";

export default function ContactPage() {
    return (
        <React.Fragment>
            <ContactSection />,
            <WorkTime />
        </React.Fragment>
    );
}
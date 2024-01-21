import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata:Metadata = {
    title: 'Terms of Use - Omeglerr',
    description: 'Omeglerr terms of use',
}

function page() {
  return (
        <div className='flex flex-col gap-3 px-5 md:px-10 lg:px-16'>
            <div className='h-[33vh] md:h-[42vh] lg:h-[50vh] flex justify-center items-center rounded-lg bg-slate-200'>
                <h1 className='font-bold text-3xl text-slate-500'>Terms of Use</h1>
            </div> 

            <div className=''>
                <h4 className='text-sm'>This Terms of Use was last updated on January 1, 2024</h4>
            </div>
            
            <h3 className='italic text-sm'>The highlighted text is aimed to give a plain English summary of our Terms of Use.</h3>

            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Acceptance of terms</h2>
                <p className='mt-2'>
                    By accessing or using Omeglerr ("the Service"), you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use the Service.
                </p>
            </div>

            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Eligibilty</h2>
                <p className='mt-2'>
                You must be at least 18 years old or have obtained parental consent to use the Service. By using the Service, you represent and warrant that you meet the eligibility requirements.
                </p>
            </div>
            <div className='mt-4'>
                <h2 className='text-lg font-bold'>User Conduct</h2>
                <p className='mt-2'>
                 Users must conduct themselves in a respectful and lawful manner.
                </p>
                <p className='font-bold bg-red-500/40'>Users are prohibited from engaging in offensive, abusive, or inappropriate behavior.
                    Explicit content, harassment, and the sharing of illegal materials are strictly forbidden.</p>
            </div>

            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Content Guidelines</h2>
                <p className='mt-2'>
                Users are responsible for the content they share and must not violate copyright laws.
                 <br /> The Service reserves the right to remove any content deemed inappropriate or in violation of these terms.
                </p>

            </div>

            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Security and Privacy</h2>
                <p className='mt-3'>
                Omeglerr prioritizes user security and privacy.
User data is handled in accordance with our <Link href="/privacy" style={{textDecoration:"underline",color:"blue"}} >Privacy Policy.</Link>
                </p>
            </div>
            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Moderation and Reporting</h2>
                <p className='mt-3'>
                The Service employs moderation to monitor user interactions.
<br /> Users are encouraged to report any violations or inappropriate behavior.
                </p>
            </div>
            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Prohibited Activities</h2>
                <p className='mt-3'>
                Impersonation, spamming, hacking attempts, and other prohibited activities are strictly forbidden.
                </p>
            </div>
            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Service Availabilty and Changes</h2>
                <p className='mt-3'>
                The Service may experience interruptions for maintenance or updates.
Omeglerr reserves the right to modify or discontinue services with or without notice.
                </p>
            </div>

            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Liabilty and Disclaimers</h2>
                <p className='mt-3'>
                Omeglerr is not liable for user actions and provides the Service "as-is."
<br />Users are responsible for the risks associated with online interactions.
                </p>
            </div>

            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Legal Compliance</h2>
                <p className='mt-3'>
                Users must comply with all applicable laws and regulations.
                <br />Violations may result in account termination and legal action.
                </p>
            </div>

            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Termination and Blocking IP Adrress</h2>
                <p className='mt-3'>
                Your IP address may be terminated for repeated violations or engaging in illegal activities.
                </p>
            </div>

            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Governing Law</h2>
                <p className='mt-3'>
                These terms and conditions are governed by the laws of India.
                </p>
            </div>

            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Contact Information</h2>
                <p className='mt-3'>
                For support, reporting issues, or questions regarding these terms, Contact Email: <span className='font-bold'></span>
                </p>
            </div>

            <p className='bg-sky-300/40 mb-8'>
                By using Omeglerr, you acknowledge that you have read, understood, and agree to these terms and conditions. These terms are subject to change, and any modifications will be effective upon posting. It is your responsibility to review and stay informed of any updates.
            </p>
        </div>
    )
}

export default page;


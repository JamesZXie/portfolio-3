'use client';

import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div id='projects' className='w-full'>
      <ProjectCard
        tags={['WEB', 'ENTERPRISE', 'B2B']}
        title={'DEPLOYABLE ARCHITECTURE STACKS'}
        subtitle={'Packaged automation for deploying cloud environments'}
        role={
          'Design lead in cross-functional team of 12 reporting directly to CEO'
        }
        impact={[
          '80% reduction in deployment cost',
          '60% reduction in deployment time (so far)',
          'MOD Award: recognized as top 1% of IBM designers',
        ]}
        video='DA_Demo'
      >
        0 to 1 automation suite conceptualized during a coffee chat with a
        distinguished engineer. Led design and execution. Users are now able to
        automatically deploy environments in 2 months, instead of burning cash
        on consultants for half a year. Drove adoption to make it the #1
        featured item on{' '}
        <a
          className='color-[var(--color-amber-500)] break-words'
          href='https://cloud.ibm.com/catalog#highlights'
        >
          the IBM Cloud Catalog.
        </a>
      </ProjectCard>
      <ProjectCard
        tags={['WEB', 'ENTERPRISE', 'B2B']}
        title={'NETWORK SECURITY GROUPS'}
        role={'Design lead on team with distinguished engineers, PM, and sales'}
        impact={[
          '5 min checkout form completion time',
          '4 min time spent on debugging flow',
          '11% UI adoption rate in first 3 months',
        ]}
        video='NSG_Demo'
      >
        Led design on a 0 to 1 zero-trust network guardrails feature that cut
        unauthorized access attempts 40%.
      </ProjectCard>
      <ProjectCard
        tags={['WEB', 'ENTERPRISE', 'B2B']}
        title={'CLOUD PLATFORM DISCOVERY'}
        role={'Design lead on team with Sales, PM, and Marketing'}
        impact={['20% increase in page traffic', 'Doubled median time-on-page']}
        video='Overview_Demo'
      >
        Led design on reimagining of the Power VS cloud platform discovery flow.
        Created new visual illustrations, pushed the boundaries of the Carbon
        design system. Began generating organic inbound leads, where previously
        there were almost none.
      </ProjectCard>
      <ProjectCard
        tags={['IOT', 'DESIGN EMINENCE']}
        title={'THE POWERGLOVE'}
        role={'Design and robotics lead on art project team of 30'}
        impact={['lots of fun']}
        video='Powerglove_Demo'
      >
        Built a glove with flex sensors and an accelerometer, created an
        internal API to interface with it and let a bunch of other IBMers use it
        to interact with their own digital art.
      </ProjectCard>
      <ProjectCard
        tags={['MOBILE', 'B2C', 'NONPROFIT']}
        title={'CROWDSOURCING EMERGENCY RESCUE'}
        role={'Design and development lead partnering with an Austin nonprofit'}
        impact={[
          '312 volunteers recruited',
          '430 rescue and aid missions',
          '$1.5 million raised',
        ]}
        video='AustinCold_Demo'
      >
        Launched a crisis-response web app for underprivileged neighborhoods who
        were receiving less help during the emergency situation. Over the course
        of 72 hours, we mobilized 312 volunteers, coordinated 430 rescue runs,
        and drove $1.5 M in donations during the 2021 Texas winter storm. Was
        featured on CNN.
      </ProjectCard>
    </div>
  );
}

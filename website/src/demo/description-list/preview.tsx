'use client'

import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from 'twistail-react/description-list'

export default function DescriptionListDemo() {
  return (
    <DescriptionList className="w-full max-w-sm">
      <DescriptionTerm>Name</DescriptionTerm>
      <DescriptionDetails>John Doe</DescriptionDetails>

      <DescriptionTerm>Email</DescriptionTerm>
      <DescriptionDetails>john.doe@example.com</DescriptionDetails>

      <DescriptionTerm>Position</DescriptionTerm>
      <DescriptionDetails>Software Engineer</DescriptionDetails>

      <DescriptionTerm>Department</DescriptionTerm>
      <DescriptionDetails>Engineering</DescriptionDetails>

      <DescriptionTerm>Location</DescriptionTerm>
      <DescriptionDetails>San Francisco, CA</DescriptionDetails>
    </DescriptionList>
  )
}

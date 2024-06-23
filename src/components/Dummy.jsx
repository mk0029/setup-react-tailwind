import React, { useState } from 'react'
import Header from './common/Header'
import PrimaryHeading from './custom-ui/PrimaryHeading'
import Paragraph from './custom-ui/Paragraph'
import Input from './custom-ui/Input'
import Cta from './custom-ui/Cta'
import BackToTop from './common/BackToTop'

const Dummy = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="container text-center">
      <Header />
      <PrimaryHeading center maxFontSize={50} reduceBelow={1024}>
        Common Heading
      </PrimaryHeading>
      <Paragraph center>
        This page does not contain any kind of UI component, it's just for
        folder structure only. <br />
        check Back to top component for icons use
      </Paragraph>
      <div className="flex items-center justify-center py-4">
        <Input
          placeholder="lorem"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span className="ml-2 inline-block max-w-96 overflow-hidden text-ellipsis whitespace-nowrap rounded-2.5 border border-red-400 px-4 py-2.5 text-base font-medium capitalize">
          your input value is :- {inputValue}
        </span>
      </div>

      <div className="my-3 inline-flex justify-center gap-x-3 rounded-4 border border-solid border-black p-3 py-4">
        <Cta ghost>Ghost Button</Cta>
        <Cta transparent>Transparent Button</Cta>
        <Cta>Default Button</Cta>
        {/* for use button as a link just add url in it  */}
        <Cta target="_blank" url="https://radialcode.com">
          Link
        </Cta>
      </div>
      <div className="container flex h-screen flex-col items-center justify-center gap-6">
        <Paragraph center className="max-w-[850px]">
          To use this setup, you just need to remove the existing git repo by
          using this command in <b>Bash</b>.
          <br />
          <span className="text inline-block bg-black/80 p-1 text-white">
            rm -rf .git
          </span>
          <br />
          And after that, you can add a new repo to this project.
        </Paragraph>
        <Cta
          target="_blank"
          url="https://github.com/mk0029/setup-react-tailwind"
        >
          Clone Repo
        </Cta>
      </div>
      <BackToTop />
    </div>
  )
}

export default Dummy

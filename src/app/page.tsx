'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from './components/modal';
import Collapse from './components/collapse';
import Tabs from './components/tabs';
import Summary, { DescriptionItem } from './components/description';
import {
  AddressBook,
  At,
  Gear,
  GenderIntersex,
  Phone,
  Users,
} from '@phosphor-icons/react';
import Description from './components/description';
import Tooltip from './components/tooltip';
import Switcher from './components/switcher';
import Button from './components/button';
import Information from './components/information';

export default function Home() {
  const [visible, setVisible] = useState(false);

  const openHandle = () => {
    setVisible(true);
  };

  const closeHandle = () => {
    setVisible(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button
          className="capitalize fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-sky-700/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-sky-700/30 hover:bg-sky-700/60"
          onClick={() => openHandle()}
        >
          Create new
        </button>
        <Modal
          title={'I am'}
          visible={visible}
          onClose={() => closeHandle()}
          content={
            <>
              <Tabs
                type={'checkbox'}
                items={[
                  {
                    id: 'patient',
                    label: 'Patient',
                    content: (
                      <Collapse
                        items={[
                          {
                            label: 'Patient',
                            content: (isEditing) => (
                              <Information isEditing={isEditing} />
                            ),
                          },
                          {
                            label: 'Settings',
                            content: () => (
                              <>
                                <Switcher
                                  label={
                                    <>
                                      <Gear weight="fill" /> Can book multiple
                                      appointments
                                    </>
                                  }
                                />
                                <div className="w-full flex justify-between items-center gap-2">
                                  <Button
                                    className="w-full"
                                    category="secondary"
                                  >
                                    Cancel
                                  </Button>
                                  <Button className="w-full">Save</Button>
                                </div>
                              </>
                            ),
                          },
                        ]}
                      />
                    ),
                  },
                  {
                    id: 'contact',
                    label: 'Contact',
                    content: (
                      <>
                        <Collapse
                          items={[
                            {
                              label: 'Contact',
                              content: (isEditing) => (
                                <Information isEditing={isEditing} />
                              ),
                            },
                            {
                              label: 'Patient',
                              content: (isEditing) => (
                                <Information isEditing={isEditing} />
                              ),
                            },
                            {
                              label: 'Relationship',
                              content: (isEditing) => (
                                <>
                                  <Switcher
                                    type="radio"
                                    name="relationship"
                                    label={
                                      <>
                                        <Users weight="fill" /> Psychologist
                                      </>
                                    }
                                  />
                                  <Switcher
                                    type="radio"
                                    name="relationship"
                                    label={
                                      <>
                                        <Users weight="fill" /> GP
                                      </>
                                    }
                                  />
                                  <Switcher
                                    type="radio"
                                    name="relationship"
                                    label={
                                      <>
                                        <Users weight="fill" /> Mother
                                      </>
                                    }
                                  />
                                  <Switcher
                                    type="radio"
                                    name="relationship"
                                    label={
                                      <>
                                        <Users weight="fill" /> Fund Manager
                                      </>
                                    }
                                  />
                                  <Switcher
                                    type="radio"
                                    name="relationship"
                                    label={
                                      <>
                                        <Users weight="fill" /> Carer
                                      </>
                                    }
                                  />
                                  <div className="w-full flex justify-between items-center gap-2">
                                    <Button
                                      className="w-full"
                                      category="secondary"
                                    >
                                      Cancel
                                    </Button>
                                    <Button className="w-full">Save</Button>
                                  </div>
                                </>
                              ),
                            },
                            {
                              label: 'Access',
                              content: (isEditing) => (
                                <Information isEditing={isEditing} />
                              ),
                            },
                          ]}
                        />
                      </>
                    ),
                  },
                  {
                    id: 'psy',
                    label: 'Psy',
                    content: (
                      <Collapse
                        items={[
                          {
                            label: 'Psy',
                            content: () => <></>,
                          },
                        ]}
                      />
                    ),
                  },
                  {
                    id: 'operator',
                    label: 'Operator',
                    content: (
                      <Collapse
                        items={[
                          {
                            label: 'Operator',
                            content: () => <></>,
                          },
                        ]}
                      />
                    ),
                  },
                ]}
              />
            </>
          }
          // footer={<></>}
        />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
          >
            Lorem ipsum{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Lorem ipsum{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Lorem ipsum{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Lorem ipsum{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Lorem ipsum{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}

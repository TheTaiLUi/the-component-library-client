import React from 'react'
import { useLoaderData } from 'react-router-dom'
import TabBar from '../../component/tab/TabBar'
import './preview.css'
function HTML() {
  const loader = useLoaderData()
  const html = decodeURI(loader.html)
  const htmlcode = `%3Cdiv%20class=%22bg-white%20pb-6%20sm:pb-8%20lg:pb-12%22%3E%0A%3C!--%20banner%20-%20start%20--%3E%0A%3Cdiv%20class=%22flex%20flex-wrap%20sm:flex-nowrap%20sm:justify-center%20sm:items-center%20bg-indigo-500%20relative%20sm:gap-3%20px-4%20sm:pr-8%20ms:px-8%20py-3%22%3E%0A%20%20%3Cdiv%20class=%22order-1%20sm:order-none%20w-11/12%20sm:w-auto%20max-w-screen-sm%20inline-block%20text-white%20text-sm%20md:text-base%20mb-2%20sm:mb-0%22%3EThis%20is%20a%20section%20of%20some%20simple%20filler%20text,%20also%20known%20as%20placeholder%20text.%3C/div%3E%0A%0A%20%20%3Ca%20href=%22#%22%20class=%22order-last%20sm:order-none%20w-full%20sm:w-auto%20inline-block%20bg-indigo-600%20hover:bg-indigo-700%20active:bg-indigo-800%20focus-visible:ring%20ring-indigo-300%20text-white%20text-xs%20md:text-sm%20font-semibold%20text-center%20whitespace-nowrap%20rounded-lg%20outline-none%20transition%20duration-100%20px-4%20py-2%22%3ELearn%20more%3C/a%3E%0A%0A%20%20%3C!--%20close%20button%20-%20start%20--%3E%0A%20%20%3Cdiv%20class=%22order-2%20sm:order-none%20w-1/12%20sm:w-auto%20flex%20justify-end%20items-start%20sm:absolute%20sm:right-0%20sm:mr-1%20xl:mr-3%22%3E%0A%20%20%20%20%3Cbutton%20type=%22button%22%20class=%22text-white%20hover:text-indigo-100%20active:text-indigo-200%20transition%20duration-100%22%3E%0A%20%20%20%20%20%20%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20class=%22w-5%20md:w-6%20h-5%20md:h-6%22%20fill=%22none%22%20viewBox=%220%200%2024%2024%22%20stroke=%22currentColor%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%20d=%22M6%2018L18%206M6%206l12%2012%22%3E%3C/path%3E%0A%20%20%20%20%20%20%3C/svg%3E%0A%20%20%20%20%3C/button%3E%0A%20%20%3C/div%3E%0A%20%20%3C!--%20close%20button%20-%20end%20--%3E%0A%3C/div%3E%0A%3C!--%20banner%20-%20end%20--%3E%0A%3C/div%3E`

  const codeformate = decodeURI(htmlcode)
  return (
    <div>
      <div className="w-full">
        <div className="border-b-2 border-gray-700 flex justify-between items-center">
          <h1 className="ml-4 text-lg">Html</h1>
          <div className="grid grid-cols-6 w-96">
            {/* <PriviewTab element={loader?.[0]} /> */}
            <TabBar element={loader} border_l={'border-l'} />
          </div>
        </div>
        <div className="p-4 ">
          <div className="w-full">
            <div className="p-4 ">
              <div className="w-screen custom_css_w">
                <pre className=" overflow-y-auto">
                  <code className="">{codeformate}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HTML

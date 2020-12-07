import React from "react"
import { Link } from "gatsby-plugin-modal-routing"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbtack,  
} from "@fortawesome/free-solid-svg-icons"

const IndexPage = ({ data }) => (
  	<Layout>    
    <div className="h-screen w-full flex overflow-hidden">
    <nav className="flex flex-col bg-white-200 dark:bg-gray-900 w-64 pt-4 pb-6">
		<div className="ml-1 mt-6 flex flex-row float-left pb-2">			
			<img
				className="logo"
				src="https://www.ampenet.com/wp-content/uploads/2020/12/logo.png"
				alt="Quatrix logo" 
            />
		</div>		
		<ul className="mt-2 text-gray-600 float-left">		
			<li className="mt-10">			
				<a href="../" className="flex active">
				    <svg className="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  					<path
    				stroke-linecap="round"
    				stroke-linejoin="round"
    				stroke-width="1"
    				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  					/>
					</svg>
					<span className="ml-2 capitalize font-large">
						<h3>
						My Tasks
						</h3>					
					</span>
				</a>
			</li>
			<li className="mt-5">
				<a href="#home" className="flex">
				<svg className="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  					<path
    				stroke-linecap="round"
    				stroke-linejoin="round"
    				stroke-width="1"
    				d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  					/>
					</svg>
					<span className="ml-2 capitalize">
						<h3>
						Projects
						</h3>
					</span>
				</a>
			</li>
		</ul>
	</nav>
	<main className="flex-1 flex flex-col bg-white-50 transition duration-500 ease-in-out overflow-y-auto">
		<div className="mx-2 my-9">
			<nav className="flex flex-row justify-between dark:border-gray-600 dark:text-gray-400 transition duration-500 ease-in-out">
				<div className="flex">
					<a href="../" className="ml-9 block text-red-500 border-red-500 focus:outline-none border-b-4 font-medium capitalize transition duration-500 ease-in-out">
						<h2>All Tasks</h2>
					</a>
					<a href="completed-tasks/" className="ml-6 block text-gray-400 border-gray-400 focus:outline-none font-medium capitalize transition duration-500 ease-in-out">
						<h2>Completed Tasks</h2>
					</a>					
				</div>
				<div className="flex items-center float-right select-none">
        			<Link to="/add-task/" asModal>
        			<button className="flex items-center justify-between py-3 px-10 text-white dark:text-gray-200 active:bg-red-500 bg-red-500 dark:bg-red-500 rounded-lg shadow">
          				<svg className="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path
    					stroke-linecap="round"
    					stroke-linejoin="round"
    					stroke-width="2"
    					d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  						/>
						</svg>
		    			<span>Add</span>			
	    			</button>
            		</Link>
					<span className="flex items-center justify-between px-5">
        			<img
						className="h-12 w-12 rounded-full object-cover"
						src="https://www.ampenet.com/wp-content/uploads/2020/12/elon_musk.jpg"
						alt="Quatrix Profile" 
					/>
					</span>
				</div>
			</nav>
			<div className="ml-6 pb-2 mr-6 flex items-center justify-between text-gray-400 dark:text-gray-400 border-b dark:border-gray-600">
				<div className="px-10 pt-6">
					<span>						
					Tasks
					</span>					
				</div>
				<div className="pr-10 mr-2 pt-6">					
					<span className="capitalize ml-10">
            		Actions						
					</span>
				</div>
			</div>			
			
			{data.allStrapiTask.edges.map(document => (
			<React.Fragment>
			<div className="ml-6 flex py-4 mr-6 justify-between bg-white dark:bg-gray-600 border-b">
				<div className="flex justify-between">
					<div className="flex flex-col pr-6 capitalize text-gray-300 dark:text-gray-400">	
						<label class="float-left inline-flex items-center mt-3">
                			<input type="checkbox" class="form-checkbox h-5 w-5 text-red-500" unchecked></input>
           				 </label>							
					</div>					    			
					<div className="flex flex-col capitalize text-gray-600 dark:text-gray-400">												
						<span className="text-xl font-light text-black dark:text-gray-200">
						<Link to="/edit-task/" asModal>{document.node.name}</Link>
						</span>
						<span className="text-xm font-light text-black text-gray-300">
						{document.node.description}
						</span>
					</div>					
				</div>
				<div className="flex">
					<div className="mr-4 flex flex-col capitalize text-gray-600 dark:text-gray-400">
						<button type="button" class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
							<FontAwesomeIcon icon={faThumbtack} size="1x" className="transform rotate-45"/>
						</button>						
					</div>
					<div className="mr-10 flex flex-col capitalize text-gray-600 dark:text-gray-400">
						<button type="button" class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
        					Done
      					</button>	                				
					</div>					
				</div>
			</div>
			</React.Fragment>
				))
			}
     		
		</div>
	</main>
	</div>
  	</Layout>
)

export default IndexPage

export const query = graphql`
  {
    allStrapiTask {
      edges {
        node {
          id
          name
          description
          pinned
          completed
        }
      }
    }
    sitePlugin {
      id
    }
  }
`
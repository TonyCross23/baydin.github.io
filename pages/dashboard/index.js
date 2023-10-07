import React, {useState} from 'react';
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {questionLists} from "@/apis/questions-api";
import Link from "next/link";
import SearchBar from "@/layouts/searchbar";


const Index = () => {

    // pagination
    const queryClient = useQueryClient()


    const{data:questions ,isLoading,isError,isSuccess} =useQuery({
        queryKey : ['get','questions'],
        queryFn : questionLists,
    })

    return (
        <div>
            <div className="mt-3">
                <span className="text-left text-gray-400 dark:text-gray-200 ">မင်းသိင်္ခ / <strong className="text-gray-400 dark:text-dark">လက်ထောက်ဗေဒင်</strong></span>
            </div>
            <div className="mt-6 ms-4 me-4">
                <div className="text-center bg-white border border-white-300 rounded-lg shadow sm:p-2 bg-white-800 border-white-700 ">
                   <div>
                       <img className="rounded-full w-26 h-20 max-w-screen-md mx-auto" src="https://mintheinkha-lathtaukbaydin.netlify.app/images/mintheinkha_logo.png"/>
                       <h1 className="text-2xl text-gray-900 dark:text-white my-3">လက်ထောက်ဗေဒင်</h1>
                   </div>

                </div>



            {/*table*/}
                {isLoading && "Loading...."}
                {isSuccess && questions.map(question => {
                    return (
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left table-cell text-gray-500 dark:text-gray-400">

                                <tbody>
                                <tr className="" key={question.questionName}>
                                    <Link href={`/${question.questionName}`}>
                                        <div>
                                            <td className="px-6 py-4">{question.questionNo}</td>
                                            <td className="px-6 py-4">{question.questionName}</td>
                                        </div>
                                    </Link>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    );

                })}



            </div>
        </div>
    );
};

export default Index;
import React from 'react';
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {numberLists} from "@/apis/numberLists";
import {useRouter} from "next/router";
import {global} from "styled-jsx/css";
import {Router} from "react-router-dom";
import Link from "next/link";
import {questionByName} from "@/apis/questionid";




const QuestionName = () => {

    const queryClient = useQueryClient()
    const router = useRouter()
    const {questionName} = router.query;


    const{data:question} =useQuery({
        queryKey : ['get','questions',questionName],
        queryFn :() => questionByName(questionName),
        enabled : !!questionName,
    })

    const{data:numbers ,isLoading,isError,isSuccess} =useQuery({
        queryKey : ['get','numberList'],
        queryFn : numberLists,
    })


        switch (numbers) {
            case "၁" :
                return 1;

            case "၂" :
                return 2;

            case "၃" :
                return 3;

            case "၄" :
                return 4;

            case "၅" :
                return 5;

            case "၆" :
                return 6;

            case "၇" :
                return 7;

            case "၈" :
                return 8;

            case "၉" :
                return 9;

            case "၁၀" :
                return 10;
                breack;
        }



    return (
        <div>

           <div className="mt-3">
                <span className="text-left text-gray-800 dark:text-gray-200 ">မင်းသိင်္ခ / <strong className="text-gray-400 dark:text-dark">လက်ထောက်ဗေဒင်</strong></span>
            </div>
            <div className="mt-6 ms-4 me-4">
                <div className="text-center bg-white border border-white-300 rounded-lg shadow sm:p-2 bg-white-800 border-white-700 ">
                    <div className="my-4">
                        <img className="rounded-full w-26 h-20 max-w-screen-md mx-auto" src="https://mintheinkha-lathtaukbaydin.netlify.app/images/mintheinkha_logo.png"/>
                        <h1 className="text-2xl text-gray-900 dark:text-white my-3">လက်ထောက်ဗေဒင်</h1>
                        <h4 className="text-2xl text-gray-900 dark:text-white my-3">{isSuccess && questionName}</h4>
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            <Link href={"/dashboard"}>နောက်သို့</Link>
                        </button>



                    </div>

                    {isSuccess && numbers.map(number=>{
                        return (
                            <div className="boddy">
                                <div className="display">
                                    <div className="tablelist">
                                        <div>
                                            <button type="button"  className="btn-number1 ms-0.5 text-white font-medium mb-1">
                                                <p>{number}</p>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>


        </div>
    );
};

export default QuestionName;
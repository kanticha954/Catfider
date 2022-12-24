import { useSession, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Loading from '../../components/loading'
import catProfile1 from '../../public/index/cat-profile1.png'
import catProfile2 from '../../public/my-cat/cat-profile1.png'
import catProfile3 from '../../public/my-cat/cat-profile2.png'
import petIcon from '../../public/my-cat/pet-icon.png'
import Homecat from '../../components/homecat.js'
import HomecardCatprofile from '../../components/homecardcatprofile'
import Router from 'next/router';
import { supabase } from '../api/supabase'
import useSWR from 'swr'
import { getCookie } from 'cookies-next';



export default function MyCat() {

  const session = useSession()
  const [loading, setLoading] = useState(true)
  const [cat, setCat] = useState(null)

  useEffect(() => {
    catExample()
  }, [session])


  const catExample = async () => {

    //fix user_id not stable
    var cookie = getCookie("supabase-auth-token")
    var token = cookie.split('"')[1]
    var { data: { user: { id } }, } = await supabase.auth.getUser(token)

    var raw = JSON.stringify({
      //"login_id": "113ccce3-1b58-4ce8-a5fd-cdd0426242a9",
      "login_id": id,
    });

    var myheader = {
      'Content-Type': 'application/json'
    };


    var requestOptions = {
      method: 'POST',
      headers: myheader,
      body: raw,
      redirect: 'follow'
    };

    try {
      setLoading(true);
      let response = await fetch("/api/cat/userview/showmyCat", requestOptions);
      let data = await response.json();
      console.log("req : " + JSON.stringify(token));
      console.log("response : " + JSON.stringify(data[0].queue));
      setCat(data[0].queue)
    } finally {
      setLoading(false);
    }
  };

  const searchCat = async (e) => {
    var cookie = getCookie("supabase-auth-token")
    var token = cookie.split('"')[1]
    var { data: { user: { id } }, } = await supabase.auth.getUser(token)

    var sby = e.target.searchBy.value;
    var sbar = e.target.searchBar.value;
    var bef = {
      "login_id": id,
      "page_number": 1,
    };

    if (sby == "status") {
      bef = {
        ...bef,
        "status": sbar,
      }
    }

    if (sby == "breed") {
      bef = {
        ...bef,
        "breed": sbar,
      }
    }

    if (sby == "color") {
      bef = {
        ...bef,
        "color": sbar,
      }
    }

    if (sby == "cat_id") {
      bef = {
        ...bef,
        "cat_id": sbar,
      }
    }

    var raw = JSON.stringify(bef);


    var myheader = {
      'Content-Type': 'application/json'
    };


    var requestOptions = {
      method: 'POST',
      headers: myheader,
      body: raw,
      redirect: 'follow'
    };

    try {
      setLoading(true);
      let response = await fetch("/api/cat/searchCat", requestOptions);
      let data = await response.json();
      console.log("response : " + JSON.stringify(data));
      setCat(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="container min-h-[87vh] h-auto mx-auto max-w-6xl px-5 xl:px-0">

      <nav class="flex my-8 breadcrumb" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              หน้าแรก
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <a class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 ">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 ">แมวของฉัน</span>
              </a>
            </div>
          </li>
        </ol>
      </nav>


      <div class="button-hidden flex mt-8">

        <p class="text-4xl text-black font-normal mb-8">แมวของฉัน</p>

        <a href="/user/form-adopt" class="ml-auto">
          <button
            type="button"
            class="
          button-hidden 
          h-10
          md:ml-auto
          lg:ml-auto
          bg-iris hover:bg-indigo-400
          text-white font-medium 
          py-2 px-4 gap-3 
          rounded inline-flex items-center"
            style={{ '@media print': { display: 'none' } }}>
            <Image src={petIcon} placeholder="blur" />
            <span>ขออุปการะแมว</span>
          </button></a>

      </div>

      <hr class="button-hidden border-1 border-gray-200 mb-8" />

      <form class="lg:mx-28 lg:max-w-10/12" onSubmit={searchCat} method="POST">
        <div class="flex mt-9">
          <label class="block ml-44">
            <select
              type="search"
              id="search-dropdown"
              name="searchBy"
              class="
                      block
                      rounded-l-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                      text-gray-500 
                      font-normal
                  "
            >
              <option value="status">สถานะ</option>
              <option value="breed">สายพันธุ์</option>
              <option value="color"> สี หรือ ลาย</option>
              <option value="cat_id">รหัสแมว</option>
            </select>
          </label>
          <div class="relative w-full mr-28">
            <input
              type="search"
              id="search-dropdown"
              name="searchBar"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="พิมพ์ค้นหาที่นี่"
              required
            />
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-salmon rounded-r-lg border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
              </path>
              </svg>
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-3 justify-items-center gap-6 ml-24 mr-7 mt-9  lg:mx-auto lg:max-w-7xl">

        {cat?.map((item) => (
          <>
            {/* {console.log(JSON.stringify(item))} */}
            <HomecardCatprofile item={item.cat_profile} />
          </>
        ))}
      </div>


    </div>
  )

}
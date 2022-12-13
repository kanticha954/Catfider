import Signin from '../../components/sigin'

export default function ShelterForm() {
    return (
        <div class="h-[87vh]">
            <div class="w-screen h-[20rem]">
                <p class="text-[48px] font-normal text-center pt-[7rem]">สมัครสมาชิก</p>
                <p class="text-[20px] font-normal text-center pt-2">สำหรับมูลนิธิ</p>
            </div>

            <form action="#" method="POST">
                <div class="bg-gray-200">
                    <div class="container mx-auto flex justify-around">

                        <div class="w-1/3 pt-9">
                            <h4 class="font-inter font-medium">ข้อมูลมูลนิธิ</h4>
                            <h6 class="font-light pt-2">ข้อมูลเบื้องต้นของมูลนิธิเพื่อให้ทางทีมงาน Cat Finder และ ผู้ใช้งานทั่วไปสามารถอ่านข้อมูล</h6>
                        </div>

                        <div class="w-3/5 my-8 bg-white shadow rounded-t-md">
                            <div class="p-7 max-w-lg">
                                <div class="grid grid-cols-1 gap-6 pb-5">
                                    <label class="block">
                                        <span class="font-inter text-gray-700">ชื่อมูลนิธิ</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">เว็บไซต์</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">ชื่อธนาคาร (1)</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">ชื่อธนาคาร (2)</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <form action="#" method="POST">
                <div class="bg-gray-200">
                    <div class="container mx-auto flex justify-around">

                        <div class="w-1/3 pt-9">
                            <h4 class="font-inter font-medium">ข้อมูลสำหรับติดต่อ</h4>
                            <h6 class="font-light pt-2">ข้อมูลสำหรับให้ทางทีมงาน cat Finder ติดต่อกับทางมูลนิธิ</h6>
                        </div>

                        <div class="w-3/5 my-8 bg-white shadow rounded-t-md">
                            <div class="p-7 max-w-lg">
                                <div class="grid grid-cols-1 gap-6 pb-5">
                                    <label class="block">
                                        <span class="font-inter text-gray-700">ชื่อจริง</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">Email address</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">เบอร์ติดต่อ</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">ที่อยู่มูลนิธิ</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">อำเภอ</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">ลิงก์ google map (https://)</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>


    )
}
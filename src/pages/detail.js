import { get } from "../api/posts";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
    <main id="main" class="mt-[92px] lg:mt-0">
    <div
      class="bg-center text-2xl md:text-[38px] uppercase text-gray-100 text-center mb-6 py-10"
    >
    ${data.title}
    </div>

    <div class="container mb-8">
      <div class="bg-gray-100 p-2 rounded">
        <ol class="flex items-center gap-2">
          <li>
            <a href="/"><i class="fa fa-home"></i></a>
          </li>
        </ol>
      </div>
    </div>

    <div class="container">
      <div class="flex flex-col lg:flex-row gap-12">
        <div class="w-full lg:w-[40%] flex">
          <div class="flex flex-wrap md:flex-nowrap gap-3 mb-4">
            <div class="w-full lg:w-[80%]">
              <img
                src="${data.img}"
                alt=""
                class="p-4 border border-solid border-gray-900 object-cover"
              />
            </div>
            <div class="w-[20%]">
              <img
                src="${data.img}"
                alt=""
                class="p-2 border border-solid border-gray-900 object-cover"
              />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[60%]">
          <div class="mb-10">
            <h3 class="text-xl lg:text-3xl mb-2">
            ${data.title}
            </h3>
            <div class="flex items-center gap-8">
              <span
                class="text-base lg:text-2xl text-pink-500 text-center font-bold"
                >${data.desc}</span
              >
            </div>
          </div>
          <div class="border-y border-solid border-gray-300 py-4">
          ${data.desc2}
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </main>
        `;
    },
};
export default DetailPage;
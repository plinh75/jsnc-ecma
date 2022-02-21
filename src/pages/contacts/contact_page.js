const ContactPage = {
    render() {
        return /* html */`
        <main id="main" class="mt-[92px] lg:mt-0">
        <div
          class="bg-center text-2xl md:text-[38px] uppercase text-gray-100 text-center mb-6 py-10"
        >
          Liên hệ
        </div>
        <div class="container">
          <div class="bg-gray-100 p-2 rounded">
            <ol class="flex items-center gap-2">
              <li>
                <a href="https://shopsonmoi.vn/"><i class="fa fa-home"></i></a>
              </li>
              <li><a class="uppercase">/ Liên hệ</a></li>
            </ol>
          </div>
        </div>

        <div class="container">
          <h3 class="my-12 text-xl">
            <strong
              >Shop son môi nhận Ship hàng tại TPHCM, Hà Nội và các tỉnh thành
              tại Việt Nam<br
            /></strong>
          </h3>
          <div
            class="p-4 mb-16"
            style="background: #ffd7e4; padding: 10px; border-radius: 10px"
          >
            <h4 class="italic font-bold">Thông tin Shop Son Môi:</h4>
            <ul class="list-disc ml-8">
              <li class="mb-4 text-sm lg:text-base font-normal">
                <span>Địa chỉ: 28 Tô Vĩnh Diện, Thủ Đức, HCM</span>
              </li>
              <li class="mb-4 text-sm lg:text-base font-normal">
                <span>Hotline: 0888 75 80 85</span>
              </li>
              <li class="mb-4 text-sm lg:text-base font-normal">
                <span
                  >Fanpage:
                  <a href="#">https://fb.com/ShopSonMoiVietNam</a></span
                >
              </li>
            </ul>
          </div>
        </div>
      </main>
        `;
    },
};
export default ContactPage;
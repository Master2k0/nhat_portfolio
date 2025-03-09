import { Circa as Datas } from "@/configs/datas/circa";
import { useResponsiveProps } from "@/hooks/responsive.hook";

function AppUIDesign() {
  const isLargeScreen = useResponsiveProps({ xl: true });

  return (
    <div className="flex flex-col gap-6 xl:gap-10">
      <div className="flex flex-col gap-5">
        <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
          {Datas.consumerProduct.section7.homescreen.title}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
          {Datas.consumerProduct.section7.homescreen.imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={Datas.consumerProduct.section7.homescreen.title}
              className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
            />
          ))}
        </div>
      </div>
      <div className="border-dash-custom" />
      <div className="flex flex-col gap-5">
        <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
          {Datas.consumerProduct.section7.productList.title}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
          {Datas.consumerProduct.section7.productList.imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={Datas.consumerProduct.section7.productList.title}
              className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
            />
          ))}
        </div>
      </div>
      <div className="border-dash-custom" />
      <div className="flex flex-col xl:flex-row xl:gap-[38px]">
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
            {Datas.consumerProduct.section7.productDetail.title}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
            {Datas.consumerProduct.section7.productDetail.imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={Datas.consumerProduct.section7.productDetail.title}
                className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
              />
            ))}
          </div>
        </div>
        {!isLargeScreen && <div className="border-dash-custom" />}
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
            {Datas.consumerProduct.section7.cart.title}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
            {Datas.consumerProduct.section7.cart.imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={Datas.consumerProduct.section7.cart.title}
                className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-dash-custom" />
      <div className="flex flex-col xl:flex-row xl:gap-[38px]">
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
            {Datas.consumerProduct.section7.checkout.title}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
            {Datas.consumerProduct.section7.checkout.imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={Datas.consumerProduct.section7.checkout.title}
                className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
              />
            ))}
          </div>
        </div>
        {!isLargeScreen && <div className="border-dash-custom" />}
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
            {Datas.consumerProduct.section7.myOrder.title}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
            {Datas.consumerProduct.section7.myOrder.imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={Datas.consumerProduct.section7.myOrder.title}
                className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
      {isLargeScreen ? (
        <div className="flex flex-col gap-5">
          <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
            {Datas.consumerProduct.section7.myAccount.title}
          </div>
          <div className="flex flex-wrap items-center justify-start gap-3 xl:gap-[38px]">
            {Datas.consumerProduct.section7.myAccount.imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={Datas.consumerProduct.section7.myAccount.title}
                className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
              My Account
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
              <img
                src={Datas.consumerProduct.section7.myAccount.imgs[0]}
                alt={Datas.consumerProduct.section7.checkout.title}
                className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
              />
            </div>
          </div>
          <div className="border-dash-custom" />
          <div className="flex flex-col gap-5">
            <div className="w-full rounded-[8px] bg-gravel-600 p-3 text-16s text-gravel-100 xl:rounded-xl xl:p-5 xl:text-18s">
              Connection/ Member Profile
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-[38px]">
              {Datas.consumerProduct.section7.myAccount.imgs.map((img, index) => {
                if (index !== 0) {
                  return (
                    <img
                      key={index}
                      src={img}
                      alt={Datas.consumerProduct.section7.myAccount.title}
                      className="w-[100px] rounded-[8px] xl:w-[150px] xl:rounded-xl"
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AppUIDesign;

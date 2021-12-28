/* eslint-disable @next/next/no-img-element */

const Index = () => {
  const Product = (props) => {
    return (
      <>
        <div className="relative flex flex-col items-center w-1/2 pr-4 2xl:text-lg">
          <img className="w-full" src={props.iLink} alt={props.title} />
          <p className="pt-4 text-gray-700">{props.brand}</p>
          <p className="pt-1">{props.title}</p>
          <p className="pt-1">{props.price}</p>
          <p className="absolute text-black top-4 left-6">NEW</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex">
        <div className="flex flex-col items-center w-96">
          <div className="w-2/3 pt-48 text-xl 2xl:text-2xl">
            <p>Home</p>
            <p className="pt-8">Products</p>
            <p className="pt-8">Categories</p>
            <p className="pt-8">Creator Store</p>
            <p className="pt-8">Sale</p>
          </div>
        </div>

        <div className="flex pt-24">
          <div className="relative w-1/2">
            <img className="w-full" src="/banner.png" alt="" />
            <p className="absolute text-3xl text-gray-400 2xl:text-4xl top-2">
              BESTSELLERS
            </p>
          </div>

          <div className="flex flex-wrap w-1/2 pl-20">
            <Product
              iLink="/1.png"
              brand="Mono"
              title="Zebra Top T-shirt"
              price="$12—$24"
            />
            <Product
              iLink="/2.png"
              brand="Mono"
              title="Zebra Top T-shirt"
              price="$12—$24"
            />
            <Product
              iLink="/3.png"
              brand="Mono"
              title="Zebra Top T-shirt"
              price="$12—$24"
            />
            <Product
              iLink="/4.png"
              brand="Mono"
              title="Zebra Top T-shirt"
              price="$12—$24"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index

import { getTranslations } from 'next-intl/server'

export default async function page() {
  const test = await  getTranslations("existingHotelPerformance")
  return (
    <div>
        <h1 className='pt-40'>{test("test")}</h1>
    </div>
  )
}
import Link from "next/link";

const mockUrls = [
  'https://utfs.io/f/2dc5a820-fa6f-4066-b8c2-406bcf0b3f42-xdtuju.Women_.1.png',
  'https://utfs.io/f/27a97083-d1f3-4b60-84cc-b9556226bb55-ada4kn.jpeg',
  'https://utfs.io/f/68055240-7b6d-44f2-a46b-0043418e1170-19wko.webp',
  'https://utfs.io/f/1d1d2cef-1275-4714-ad57-7c6a8e2fd82c-p0qr2t.png'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id}>
            <img src={image.url} className="w-48" />
          </div>
        ))}
      </div>
      Hello Gallery in progress
    </main>
  );
}

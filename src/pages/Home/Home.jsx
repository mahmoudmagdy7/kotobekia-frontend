import "../../App.css";
import * as solarIcons from "solar-icon-set";
import PartnerSection from "../../Components/PartnerSection/PartnerSection";
import MainSlider from "../../Components/MainSlider/MainSlider";
import PartsOfCategory from "../../Components/PartsOfCategory/PartsOfCategory";

function Home() {
  const result = [
    {
      _id: "655b4ec133dd362ae53081f7",
      educationLevel: "Kindergarten",
      __v: 0,
      posts: [
        {
          _id: "655e0ee9e6c267cf7798848e",
          title: "Your Title",
          description: "Your Description",
          images: ["eba46826-d680-4dca-80be-ea2613c1a7e7-download (1).jpeg", "d128e363-fb20-4d75-a0fc-2571a5e1df6e-download (2).jpeg"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 98,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997482617",
          createdAt: "2023-11-22T14:23:37.867Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 4,
          __v: 0,
          id: "655e0ee9e6c267cf7798848e",
        },
        {
          _id: "655e137a64cdc100cd642665",
          title: "Your Title",
          description: "Your Description",
          images: ["31a41f66-4f13-41c6-bf4d-2d5d8412c483-download (1).jpeg", "c16f0b7a-af2e-4515-b413-851420b95399-download (2).jpeg"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 81,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997902012",
          createdAt: "2023-11-22T14:43:06.885Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 8,
          __v: 0,
          id: "655e137a64cdc100cd642665",
        },
        {
          _id: "655e1403b4989998bff97191",
          title: "Your Title",
          description: "Your Description",
          images: ["5b9bd1ab-89a0-4872-bbf9-5d610e908327-[object Object]"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 79,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997513692",
          createdAt: "2023-11-22T14:45:23.165Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 10,
          __v: 0,
          id: "655e1403b4989998bff97191",
        },
        {
          _id: "655e14ae41c196ce91664d79",
          title: "Your Title",
          description: "Your Description",
          images: ["a2283836-1dfb-481c-aceb-f8abde16e638-jpeg"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 77,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997041711",
          createdAt: "2023-11-22T14:48:14.261Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 12,
          __v: 0,
          id: "655e14ae41c196ce91664d79",
        },
        {
          _id: "655e3fa525bcf0386af78c73",
          title: "Your Title",
          description: "Your Description",
          images: ["f5868832-0930-4f62-81d3-19975c9baa7f.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 47,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997959293",
          createdAt: "2023-11-22T17:51:33.495Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 13,
          __v: 0,
          id: "655e3fa525bcf0386af78c73",
        },
        {
          _id: "655e3fa725bcf0386af78c77",
          title: "Your Title",
          description: "Your Description",
          images: ["52bbbe6e-f40d-4646-85c4-3c1ad3348431.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 46,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997840709",
          createdAt: "2023-11-22T17:51:35.587Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 14,
          __v: 0,
          id: "655e3fa725bcf0386af78c77",
        },
        {
          _id: "655e3fa825bcf0386af78c7b",
          title: "Your Title",
          description: "Your Description",
          images: ["1dd6f2b4-bd13-402a-8cea-0fa0960bfcb1.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 45,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997479558",
          createdAt: "2023-11-22T17:51:36.746Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 15,
          __v: 0,
          id: "655e3fa825bcf0386af78c7b",
        },
        {
          _id: "655e3fa925bcf0386af78c7f",
          title: "Your Title",
          description: "Your Description",
          images: ["d7234129-f356-4397-891d-462d38cb37cc.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 44,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997667659",
          createdAt: "2023-11-22T17:51:37.840Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 16,
          __v: 0,
          id: "655e3fa925bcf0386af78c7f",
        },
        {
          _id: "655e3faa25bcf0386af78c83",
          title: "Your Title",
          description: "Your Description",
          images: ["c24448dc-2610-4f7c-bf1c-cf53986b3a9c.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 43,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997362374",
          createdAt: "2023-11-22T17:51:38.926Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 17,
          __v: 0,
          id: "655e3faa25bcf0386af78c83",
        },
        {
          _id: "655e3fac25bcf0386af78c87",
          title: "Your Title",
          description: "Your Description",
          images: ["14aee9f1-45f0-4581-b5b1-2e3341b92926.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 42,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997361280",
          createdAt: "2023-11-22T17:51:40.021Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 18,
          __v: 0,
          id: "655e3fac25bcf0386af78c87",
        },
        {
          _id: "655e3fad25bcf0386af78c8b",
          title: "Your Title",
          description: "Your Description",
          images: ["c29740bb-fde1-4a88-bd4d-27c877c5e9dd.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 41,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997069015",
          createdAt: "2023-11-22T17:51:41.040Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 19,
          __v: 0,
          id: "655e3fad25bcf0386af78c8b",
        },
        {
          _id: "655e3fae25bcf0386af78c8f",
          title: "Your Title",
          description: "Your Description",
          images: ["4b9077f7-0ba1-4027-81ab-85907fe20c8a.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 40,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997284687",
          createdAt: "2023-11-22T17:51:42.194Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 20,
          __v: 0,
          id: "655e3fae25bcf0386af78c8f",
        },
        {
          _id: "655e3faf25bcf0386af78c93",
          title: "Your Title",
          description: "Your Description",
          images: ["2e61b4e3-6b21-42a7-bba0-ecff6cc6bc17.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 39,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997244562",
          createdAt: "2023-11-22T17:51:43.563Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 21,
          __v: 0,
          id: "655e3faf25bcf0386af78c93",
        },
        {
          _id: "655e3fb325bcf0386af78c97",
          title: "Your Title",
          description: "Your Description",
          images: ["f3b3ad0d-832b-405f-8f76-dc35f018ec38.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 38,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997601014",
          createdAt: "2023-11-22T17:51:47.117Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 22,
          __v: 0,
          id: "655e3fb325bcf0386af78c97",
        },
        {
          _id: "655e3fb425bcf0386af78c9b",
          title: "Your Title",
          description: "Your Description",
          images: ["8e2a9766-66ac-4ff4-bed6-c933313d9f37.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 37,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997436881",
          createdAt: "2023-11-22T17:51:48.107Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 23,
          __v: 0,
          id: "655e3fb425bcf0386af78c9b",
        },
        {
          _id: "655e3fb525bcf0386af78c9f",
          title: "Your Title",
          description: "Your Description",
          images: ["e08356e8-47b2-4217-959e-61a915ba8ce6.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 36,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997780582",
          createdAt: "2023-11-22T17:51:49.157Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 24,
          __v: 0,
          id: "655e3fb525bcf0386af78c9f",
        },
        {
          _id: "655e3fb625bcf0386af78ca3",
          title: "Your Title",
          description: "Your Description",
          images: ["bfa9a161-50c2-409b-9ae7-95f47589945d.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 35,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997062947",
          createdAt: "2023-11-22T17:51:50.215Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 25,
          __v: 0,
          id: "655e3fb625bcf0386af78ca3",
        },
        {
          _id: "655e3fb725bcf0386af78ca7",
          title: "Your Title",
          description: "Your Description",
          images: ["2997b368-d3a5-4b86-b729-cc5baaa233fc.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 34,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997490367",
          createdAt: "2023-11-22T17:51:51.178Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 26,
          __v: 0,
          id: "655e3fb725bcf0386af78ca7",
        },
        {
          _id: "655e3fb825bcf0386af78cab",
          title: "Your Title",
          description: "Your Description",
          images: ["40204143-569b-4501-83b0-723adc7d20e4.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 33,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997469007",
          createdAt: "2023-11-22T17:51:52.267Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 27,
          __v: 0,
          id: "655e3fb825bcf0386af78cab",
        },
        {
          _id: "655e3fbf25bcf0386af78caf",
          title: "Your Title",
          description: "Your Description",
          images: ["858caff4-6894-4be4-b94e-90a6261fcdf6.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 32,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997481216",
          createdAt: "2023-11-22T17:51:59.524Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 28,
          __v: 0,
          id: "655e3fbf25bcf0386af78caf",
        },
        {
          _id: "655e3fc025bcf0386af78cb3",
          title: "Your Title",
          description: "Your Description",
          images: ["d5b37830-98db-4158-a7c0-513890c645a5.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 31,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997003121",
          createdAt: "2023-11-22T17:52:00.727Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 29,
          __v: 0,
          id: "655e3fc025bcf0386af78cb3",
        },
        {
          _id: "655e3fc225bcf0386af78cb7",
          title: "Your Title",
          description: "Your Description",
          images: ["eaf4093a-6446-49a4-b250-8f83eae69f8e.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 30,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997601465",
          createdAt: "2023-11-22T17:52:02.591Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 30,
          __v: 0,
          id: "655e3fc225bcf0386af78cb7",
        },
        {
          _id: "655e3fc325bcf0386af78cbb",
          title: "Your Title",
          description: "Your Description",
          images: ["7dfe5056-b1b1-46e5-9cdc-f7b0323d5b09.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 29,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997061361",
          createdAt: "2023-11-22T17:52:03.709Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 31,
          __v: 0,
          id: "655e3fc325bcf0386af78cbb",
        },
        {
          _id: "655e3fc425bcf0386af78cbf",
          title: "Your Title",
          description: "Your Description",
          images: ["5cc73313-88c3-43c4-9c7a-9e0b663a1c70.png"],
          postType: "requested",
          price: "Your Price",
          grade: "",
          bookEdition: "Book Edition",
          educationLevel: "655b4ec133dd362ae53081f7",
          postStatus: "approved",
          views: 28,
          numberOfBooks: 0,
          educationTerm: "",
          educationType: "",
          location: "Location",
          identificationNumber: "21101997563200",
          createdAt: "2023-11-22T17:52:04.830Z",
          updatedAt: "2023-11-22T18:42:52.080Z",
          postId: 32,
          __v: 0,
          id: "655e3fc425bcf0386af78cbf",
        },
      ],
      id: "655b4ec133dd362ae53081f7",
    },
    {
      _id: "655b4ecd33dd362ae53081f9",
      educationLevel: "Primary_Education",
      __v: 0,
      posts: [],
      id: "655b4ecd33dd362ae53081f9",
    },
    {
      _id: "655b4ee433dd362ae53081fb",
      educationLevel: "Preparatory_Education",
      __v: 0,
      posts: [],
      id: "655b4ee433dd362ae53081fb",
    },
    {
      _id: "655b4efb33dd362ae53081fd",
      educationLevel: "Secondary_Education",
      __v: 0,
      posts: [],
      id: "655b4efb33dd362ae53081fd",
    },
    {
      _id: "655b4f0a33dd362ae53081ff",
      educationLevel: "General",
      __v: 0,
      posts: [],
      id: "655b4f0a33dd362ae53081ff",
    },
  ];
  


  return (
    <>


      <MainSlider />

      <PartsOfCategory title={"Kindergarten"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={result[0]} />
      <PartsOfCategory title={"Kindergarten"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={result[0]} />
      <PartsOfCategory title={"Kindergarten"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={result[0]} />
      {/* <PartsOfCategory title={"Primary Education"} icon={<solarIcons.CaseMinimalistic size={24} className="icon-outline" />} data={result[1]} /> */}
      {/* <PartsOfCategory title={"Preparatory Education"} icon={<solarIcons.CaseRound size={24} className="icon-outline" />} data={result[2]} /> */}
      {/* <PartsOfCategory title={"Secondary Education"} icon={<solarIcons.CaseRound size={24} className="icon-outline" />} data={result[3]} /> */}
      {/* <PartsOfCategory title={"General Books"} icon={<solarIcons.NotebookBookmark size={24} className="icon-outline" />} data={result[4]} /> */}
      <PartnerSection />
  
    </>
  );
}

export default Home;

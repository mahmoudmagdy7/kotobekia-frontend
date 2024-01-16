import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import config from "../../../config";
import { useLocation } from "react-router-dom";
import * as socialIcons from "solar-icon-set";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
export default function ShareModal({ isOpen, onClose, onOpenChange, data, copyText }) {
  const [onCopy, setOnCopy] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOnCopy(false);
  }, [isOpen]);

  const shareText = `I am sharing with you this book from \"Kotobekia\", Take a look from here : \n`;
  return (
    <>
      <Modal
        size="lg"
        backdrop="blur"
        className="text-black text-center relative bottom-0 end-0  z-[9999]"
        style={{ zIndex: 9999 + "!important" }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 sm:px-4 px-2  border-b-2 mx-2">
                Share post
                <div className="flex items-center gap-2 overflow-hidden justify-between">
                  {/* <img className="w-10 h-10" src={config.bseUrl + "/" + data.data.result.images[0]} alt="post cover" /> */}
                  <img className="w-14 h-14 rounded-xl" src="/assets/imgPost.png" alt="post cover" />
                  <div className=" max-w-[190px] sm:max-w-[300px] ">
                    <p className="text-sm font-normal truncate ">{window.location.href}</p>
                  </div>{" "}
                  <div className="w-16">
                    <Button
                      size="sm"
                      isIconOnly={onCopy}
                      color={onCopy ? "success" : "secondary"}
                      variant="flat"
                      onClick={() => {
                        setOnCopy(true);
                        copyText(window.location.href);
                      }}
                    >
                      {onCopy ? <socialIcons.Unread size={20} color="success" /> : "copy"}
                    </Button>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex  items-center justify-between  ">
                  {/* ---------- whatsapp ---------- */}
                  <WhatsappShareButton title={shareText} url={window.location.href}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" viewBox="0 0 48 48">
                      <path
                        fill="#fff"
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                      ></path>
                      <path
                        fill="#40c351"
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      ></path>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </WhatsappShareButton>
                  {/* ---------- facebook ---------- */}
                  <FacebookShareButton title={shareText} url={window.location.href}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48px" viewBox="0 0 48 48">
                      <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                      <path
                        fill="#fff"
                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                      ></path>
                    </svg>
                  </FacebookShareButton>
                  {/* ---------- messenger ---------- */}
                  <FacebookMessengerShareButton title={shareText} url={window.location.href}>
                    <FacebookMessengerIcon size={40} className="rounded-full" />
                  </FacebookMessengerShareButton>
                  {/* ---------- Twitter ---------- */}
                  <TwitterShareButton title={shareText} url={window.location.href}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" viewBox="0 0 48 48">
                      <polygon fill="#616161" points="41,6 9.929,42 6.215,42 37.287,6"></polygon>
                      <polygon fill="#fff" fillRule="evenodd" points="31.143,41 7.82,7 16.777,7 40.1,41" clipRule="evenodd"></polygon>
                      <path fill="#616161" d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>
                    </svg>
                    {/* <TwitterIcon size={48} className="rounded-xl" /> */}
                  </TwitterShareButton>
                  {/* ---------- Telegram ---------- */}
                  <TelegramShareButton title={shareText} url={window.location.href}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48px" viewBox="0 0 48 48">
                      <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                      <path
                        fill="#fff"
                        d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                      ></path>
                      <path
                        fill="#b0bec5"
                        d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                      ></path>
                    </svg>
                  </TelegramShareButton>{" "}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose} className="w-full">
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

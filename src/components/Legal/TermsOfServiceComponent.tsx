import React from "react";

type Props = {};

const TermsOfServiceComponent = (props: Props) => {
  return (
    <React.Fragment>
      <div className="flex flex-1 w-full items-center flex-col mt-5 py-16 px-8">
        <div className="container">
          <h1 className="md:text-5xl text-3xl font-bold mb-6 2xl:text-6xl leading-8 text-center">
            Terms & Conditions
          </h1>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            By downloading or using the app, these terms will automatically
            apply to you - you should make sure therefore that you read them
            carefully before using the app. You`re not allowed to copy or modify
            the app, any part of the app, or our trademarks in any way. You`re
            not allowed to attempt to extract the source code of the app, and
            you also shouldn`t try to translate the app into other languages or
            make derivative versions. The app itself, and all the trademarks,
            copyright, database rights, and other intellectual property rights
            related to it, still belong to Stocker Team.
          </p>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            Stocker Team is committed to ensuring that the app is as useful and
            efficient as possible. For that reason, we reserve the right to make
            changes to the app or to charge for its services, at any time and
            for any reason. We will never charge you for the app or its services
            without making it very clear to you exactly what you`re paying for.
          </p>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            The Stocker app stores and processes personal data that you have
            provided to us, to provide my Service. It`s your responsibility to
            keep your phone and access to the app secure. We therefore recommend
            that you do not jailbreak or root your phone, which is the process
            of removing software restrictions and limitations imposed by the
            official operating system of your device. It could make your phone
            vulnerable to malware/viruses/malicious programs, compromise your
            phone`s security features and it could mean that the Stocker app
            won`t work properly or at all.
          </p>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            The app does use third-party services that declare their Terms and
            Conditions. Link to Terms and Conditions of third-party service
            providers used by the app{" "}
          </p>
          <ol className="ml-6 mb-3 list-disc">
            <li className="mb-1">
              <a
                href="https://policies.google.com/terms"
                className="text-blue hover:text-black"
              >
                Google Play Services
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://developers.google.com/admob/terms"
                className="text-blue hover:text-black"
              >
                AdMob
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://firebase.google.com/terms/analytics"
                className="text-blue hover:text-black"
              >
                {" "}
                Google Analytics for Firebase
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://www.revenuecat.com/terms/"
                className="text-blue hover:text-black"
              >
                RevenueCat
              </a>
            </li>
          </ol>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            You should be aware that there are certain things that Stocker Team
            will not take responsibility for. Certain functions of the app will
            require the app to have an active internet connection. The
            connection can be Wi-Fi or provided by your mobile network provider,
            but Stocker Team cannot take responsibility for the app not working
            at full functionality if you don`t have access to Wi-Fi, and you
            don`t have any of your data allowance left.
          </p>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            If you`re using the app outside of an area with Wi-Fi, you should
            remember that the terms of the agreement with your mobile network
            provider will still apply. As a result, you may be charged by your
            mobile provider for the cost of data for the duration of the
            connection while accessing the app, or other third-party charges. In
            using the app, you`re accepting responsibility for any such charges,
            including roaming data charges if you use the app outside of your
            home territory (i.e. region or country) without turning off data
            roaming. If you are not the bill payer for the device on which
            you`re using the app, please be aware that we assume that you have
            received permission from the bill payer for using the app. Along the
            same lines, Stocker Team cannot always take responsibility for the
            way you use the app i.e. You need to make sure that your device
            stays charged - if it runs out of battery and you can`t turn it on
            to avail the Service, Stocker Team cannot accept responsibility.
          </p>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            With respect to Stocker Team`s responsibility for your use of the
            app, when you`re using the app, it`s important to bear in mind that
            although we endeavor to ensure that it is updated and correct at all
            times, we do rely on third parties to provide information to us so
            that we can make it available to you. Stocker Team accepts no
            liability for any loss, direct or indirect, you experience as a
            result of relying wholly on this functionality of the app.
          </p>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            At some point, we may wish to update the app. The app is currently
            available on Android & iOS - the requirements for the both
            systems(and for any additional systems we decide to extend the
            availability of the app to) may change, and you`ll need to download
            the updates if you want to keep using the app. Stocker Team does not
            promise that it will always update the app so that it is relevant to
            you and/or works with the Android & iOS version that you have
            installed on your device. However, you promise to always accept
            updates to the application when offered to you, We may also wish to
            stop providing the app, and may terminate use of it at any time
            without giving notice of termination to you. Unless we tell you
            otherwise, upon any termination, (a) the rights and licenses granted
            to you in these terms will end; (b) you must stop using the app, and
            (if needed) delete it from your device.
          </p>

          <h1 className="text-center font-bold md:text-2xl text-md 2xl:text-3xl leading-8 mb-6">
            Changes to This Terms and Conditions
          </h1>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            I may update our Terms and Conditions from time to time. Thus, you
            are advised to review this page periodically for any changes. I will
            notify you of any changes by posting the new Terms and Conditions on
            this page. These terms and conditions are effective as of
            2022-05-06.
          </p>
          <h1 className="text-center font-bold md:text-2xl text-md 2xl:text-3xl leading-8 mb-6">
            Contact Us
          </h1>
          <p className="md:text-lg text-sm text-gray-500 2xl:text-2xl leading-normal mb-3">
            {" "}
            If you have any questions or suggestions about my Terms and
            Conditions, do not hesitate to contact me at
            support@stockermobileapp.com.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TermsOfServiceComponent;

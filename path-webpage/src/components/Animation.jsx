import { useEffect } from "react";
import anime from "animejs";

const Animation = () => {

  const func = () => {
    return anime({
      targets: "svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "cubicBezier(.5, .05, .1, .3)",
      // easing: 'easeInOutSine',
      duration: 1000,
      delay: function (el, i) {
        return i * 250;
      },
      // direction: "alternate",
      loop: true,
    });  
  }
  
  useEffect(() => {
    func();
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   width="428.591"
      //   height="268.236"
      width="100vw"
      height="auto"
      viewBox="0 0 428.591 268.236"
      style={{ fill: "none", stroke: "black", maxWidth: '1536px' }} //need this line to make animation work
    >
      <g id="Block_2" data-name="Block 2" transform="translate(0.341 -389.03)">
        <g id="Mountain_Drawing" data-name="Mountain Drawing">
          <path
            id="Range"
            d="M950.565,420.062l3.806-3.549,2.678-1.638,4.51-2.321,3.1-2.184,2.819-2.594,1.269-2.321,1.409-3.413.987-2.594,2.4-2.457,4.651-2.73,2.537-1.775,1.409-2.048,2.819-2.457,3.242-2.457,4.229-2.867H993.7l2.255.683,1.41,1.638,2.114,3,1.691,1.638,1.41,1.5,1.832,1.365,3.1,1.775h1.973l1.691.819a24.778,24.778,0,0,1,2.114,2.594,37.9,37.9,0,0,0,2.4,3.14l1.128,1.229,2.537,2.867a5.115,5.115,0,0,0,1.128,2.184c.7.546.564-.546,1.55.683s2.255,2.594,2.255,2.594,1.41,2.321,1.973,2.184,2.96,1.092,2.96,1.092l1.128,1.229h2.114l1.832-1.229,1.269-2.184,1.409-1.092,1.973-1.638,2.114-.956,2.819.956,3.242,1.638,1.269,1.092,2.537,2.73,2.537,2.321,2.537,3.549,1.832.956,1.269,1.229,3.383,1.5,1.973,1.365,1.269,1.092,1.973,2.184,1.832,1.365,2.255,1.5,1.973,1.229,1.691.956,2.114.546,1.973-.546h5.5l1.973-.956,1.55-1.229h2.255l3.383-.819,2.114-.683,1.691-1.365,1.551-.819,1.832-.819,2.678-.546,3.383-1.092,1.973-1.365,1.832.683,2.114,1.775,2.255,1.365,1.691.819,3.1,1.365,1.269.683,1.409.819,2.448,1.229,1.219.491h1.925l2.053.464s.834-.343,1.091,0a9.507,9.507,0,0,0,1.989,1.089h6.929s2.438.249,2.63,0,3.336.87,3.336.87,1.283.373,1.476.435,2.181.746,2.181.746l2.63.373h7.442l1.989-.373,3.721-1.181,2.63-.373h3.4s2.5.311,2.695,0a5.186,5.186,0,0,1,2.374-1.586c1.155-.34,4.748-1.583,5.582-1.894a46.247,46.247,0,0,1,5.453-.621h1.6l1.8.87,5.132,1.645s3.336,1.089,3.528,1.089,3.529.87,3.529.87l4.17-.373s2.759-1.308,3.144-1.586,2.951-1.334,4.106-1.894,4.362-2.3,4.683-2.361a25.2,25.2,0,0,0,2.566-.87c.385-.186,3.593-1.864,3.785-2.051s3.015-2.672,3.015-2.672,1.668-.994,1.925-1.181a15.821,15.821,0,0,1,2.63-1.553c.642-.186,3.721-1.864,3.721-1.864l2.31-1.3a22.568,22.568,0,0,0,1.6-1.678c.128-.249,2.695-2.237,2.695-2.237l1.732-1.491,3.079-1.678a6.547,6.547,0,0,1,1.861-1.056c.77-.186,3.785-1.3,3.785-1.3l2.887-.559s2.759,2.8,2.887,2.92,1.476,1.74,1.668,1.678,2.117.559,2.31.559a9.146,9.146,0,0,1,2.245.559c.385.249,2.5,2.672,2.759,2.92s1.732,2.361,2.438,2.672,2.887,1.243,2.887,1.243l2.245,1.118,2.053,1.118a22.54,22.54,0,0,0,2.181,1.056,20.957,20.957,0,0,1,2.246.621c.257.186,2.566,1.056,2.951,1.181a6.765,6.765,0,0,0,1.86.435c.642,0,3.721.062,3.914,0a21.375,21.375,0,0,0,2.053-1.118c.706-.435,2.374-2.423,3.015-2.672a39.556,39.556,0,0,1,3.657-1.74,29.971,29.971,0,0,0,3.978-1.678,18.922,18.922,0,0,0,2.31-2.237s1.668-2.051,2.053-2.361,1.8-1.616,2.374-1.988,3.208-2.486,3.464-2.61,2.887-1.243,3.144-1.367,4.106-2.486,4.683-2.486a11.586,11.586,0,0,0,3.978-2.237c.449-.621,1.732-2.486,2.374-3.293a17.557,17.557,0,0,1,2.31-2.672c.577-.373,2.31-1.429,2.63-1.74s3.336-3.045,3.336-3.045.706-.621.9-.5,1.925,1.429,2.31,1.74,1.476,2.113,2.117,2.61,2.117,1.678,2.823,2.113a32.792,32.792,0,0,0,3.336,1.8,26.482,26.482,0,0,1,3.464,1.553c.321.311,2.438,2.672,2.438,2.672s3.464,2.858,3.657,3.48a11.847,11.847,0,0,0,2.053,2.983c.641.621,3.464,3.169,3.464,3.169a11.222,11.222,0,0,0,2.053,2.175,14.422,14.422,0,0,0,1.861.808c.513.186,5.068.311,5.068.311h3.079l2.374,1.367"
            transform="translate(-950.565 7)"
            fill="none"
            stroke="#000"
            stroke-width="1"
          />
          <g
            id="Mountain_one"
            data-name="Mountain one"
            transform="translate(11.136 389.577)"
          >
            <path
              id="Path_9"
              data-name="Path 9"
              d="M974.729,399.574l5.356-5.251,3.465-2.73,3.78-3.15,3.57-3.465"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_10"
              data-name="Path 10"
              d="M973.747,403.656l10.659-9.894,1.625-1.769,2.772-2.724.836-.8.406-.391"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_11"
              data-name="Path 11"
              d="M965.047,415.271l16.586-16.49s3.155-2.677,3.25-2.82,2.1-1.96,2.1-1.96"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_12"
              data-name="Path 12"
              d="M961.7,422.346l23.373-23.612"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_13"
              data-name="Path 13"
              d="M968.106,421.1l20.7-21.031"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_14"
              data-name="Path 14"
              d="M966.959,426.026l25.381-24.759"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_15"
              data-name="Path 15"
              d="M970.5,426.7l23.9-23.517"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_16"
              data-name="Path 16"
              d="M973.388,427.89l22.441-22.083"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_17"
              data-name="Path 17"
              d="M972.647,432.718l23.23-23.134"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_18"
              data-name="Path 18"
              d="M976.423,432.144,999.175,410.3"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_19"
              data-name="Path 19"
              d="M981.9,430.806l18.522-18.211"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_20"
              data-name="Path 20"
              d="M987.369,429.085l14.913-14.435"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_21"
              data-name="Path 21"
              d="M980.438,439.314l14-14.626"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_22"
              data-name="Path 22"
              d="M985.362,438.023l10.324-10.946"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_23"
              data-name="Path 23"
              d="M986.987,440.7l11.233-12.093"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_24"
              data-name="Path 24"
              d="M992.34,439.553l7.5-8.365"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_25"
              data-name="Path 25"
              d="M996.092,439.314l5.664-5.688"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_26"
              data-name="Path 26"
              d="M998.219,441.943l4.828-5.688"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_27"
              data-name="Path 27"
              d="M1000.9,441.943l3.872-4.063"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_28"
              data-name="Path 28"
              d="M1005.007,441.178l1.625-2.246"
              transform="translate(-961.94 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_29"
              data-name="Path 29"
              d="M1008.161,438.023l-4.015-2.724-1.53-1.195-1.243-1s-.526-.908-.621-1.1-.526-1.195-.526-1.195l-.335-1.243-1.338-1.434a3.812,3.812,0,0,0-.765-.717c-.239-.1-1.434-.717-1.434-.717l-.908-.669-.765-1.291.335-1.1s1.53-.956,1.721-1.052,1.816-.574,2.2-.765,2.342-.908,2.629-1.147,1.386-.908,1.769-1.147.86-.621,1.195-.813,1.529-.956,1.673-1.1.944-.239.526-.717a9.219,9.219,0,0,0-2.2-1.195l-1.53-1.1-1.434-1-1.338-1.769-1.291-2.247L997.168,407l-1.243-1.53-.322-.354s-.117.254-.156-.172,0-1.53,0-1.53l-1.577-1.482-1.577-.908-1.052-.478-1.482-.669-1.434-.287-1.864-.526s-1.04.06-1.386-.335,0-1.243,0-1.243.335-.669.526-1.1.956-1.386,1.1-1.673.43-.669.574-.908.621-1,.86-1.434.669-.956.956-1.577.956-1.864,1.1-2.247-.239-1.052,0-1.243a13.844,13.844,0,0,0,1.052-1.625,6.709,6.709,0,0,0,.526-1.769,5.979,5.979,0,0,0,0-1.338"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_30"
              data-name="Path 30"
              d="M998.924,421.222"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_31"
              data-name="Path 31"
              d="M1004.289,416.132l-5.306,5.736"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_32"
              data-name="Path 32"
              d="M995.944,395.32l1.181.87,1.678,1.491,1.864,1.678,1.367,1.616s.684.621.684.808-.249.994,0,1.3a16.052,16.052,0,0,1,.808,1.926c.124.249,1.491,1.926,1.491,1.926s.87.808,1.118.994,1.616,1.181,1.616,1.181,1.367.87,1.864,1.118a13.462,13.462,0,0,1,1.616.746c.311.249,1.926,1.864,1.926,1.864s1.367,1.678,1.553,1.988a8.229,8.229,0,0,1,.994,1.553,12.6,12.6,0,0,0,.87,2.3c.186.249,1.988,1.367,2.051,1.553a21.436,21.436,0,0,0,1.678,1.553c.249.249.932,1.056.932,1.056"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_33"
              data-name="Path 33"
              d="M1003.9,400.354l1.553,1.429s.621,1.118.746,1.367,1.181,1.988,1.367,2.237a14.255,14.255,0,0,1,1.056,1.429c.373.621,1.491,2.113,1.678,2.361s1.118,1.367,1.243,1.553.746,1.181.746,1.181"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_34"
              data-name="Path 34"
              d="M1010.791,420.291s4.254,5.688,4.35,5.927,1.291,1.816,1.291,1.816.621.669.813.908.86.669,1.338,1.243a5.444,5.444,0,0,0,1.482,1.291c.621.382,1.338.813,1.577.908s1.864.813,2.055.908.956,1,1.577,1.434,1.673,1.386,1.673,1.386"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_35"
              data-name="Path 35"
              d="M1024.222,430.758l-6.357-3.059-2.916-1.673"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_36"
              data-name="Path 36"
              d="M1038.945,423.685l-2.1-1.243-1.864-1.291-2.342-1.53a18.693,18.693,0,0,1-1.912-1.721,23.974,23.974,0,0,0-1.577-1.816l-1.291-1.243"
              transform="translate(-961.701 -382.577)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
          </g>
          <g
            id="Small_mountains_2"
            data-name="Small mountains 2"
            transform="translate(84.292 415.059)"
          >
            <path
              id="Path_37"
              data-name="Path 37"
              d="M1036.316,410.54s-3.262,3.37-4.254,4.636.287.43.287.43l1.625-.956a14.082,14.082,0,0,1,2.342-1.864c.251.072-1.338,2.151-1.338,2.151l-.287.669h.141c.335,0,1.089-.37,1.2,0s-.765,1.482-.765,1.482"
              transform="translate(-1031.685 -408.059)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_38"
              data-name="Path 38"
              d="M1037.578,418.436l1.118-3.107s.373-1.491.373-1.74-.373-3.107-.373-3.293-.5-2.237-.5-2.237"
              transform="translate(-1031.685 -408.059)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_39"
              data-name="Path 39"
              d="M1041.717,414.459l2.916,3.919s.43,1.912.43,2.1a3.668,3.668,0,0,0,.287,1.147c.143.239,1.386,1.577,1.53,1.816s5.354,4.78,5.354,4.78"
              transform="translate(-1031.685 -408.059)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_40"
              data-name="Path 40"
              d="M1048.457,421.342l9.464,7.122"
              transform="translate(-1031.685 -408.059)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_41"
              data-name="Path 41"
              d="M1089.51,433.389l12.182-6.721"
              transform="translate(-1026.685 -408.059)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_42"
              data-name="Path 42"
              d="M1091.925,434.544l9.451-5.776"
              transform="translate(-1026.685 -408.059)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_43"
              data-name="Path 43"
              d="M6.616,0S0,4.227,0,4.831,5.618,2.415,6.616,2.415,3.99,4.831,3.99,4.831h.388c.656,0,1.888-.289,2.237,0s-.84.866-.84,1.155.84-.289.84,0"
              transform="translate(68.582 21.796) rotate(3)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
          </g>
          <g
            id="Mountain_three"
            data-name="Mountain three"
            transform="translate(281.501 414.773)"
          >
            <path
              id="Path_44"
              data-name="Path 44"
              d="M1222.27,429.422l12.117-9.128,1.05-1.616,2.1-2.343,3.15-2.423"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_45"
              data-name="Path 45"
              d="M1239.4,418.113l-4.685,2.262"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_46"
              data-name="Path 46"
              d="M1237.941,429.422s1.858-4.685,1.939-4.928,1.131-1.7,1.131-1.7l2.423-1.7,2.5-1.131,2.423-1.212s.969.141,1.05-.485a5.183,5.183,0,0,0-.727-2.02l-1.292-1.373-.969-2.1V410.6l.969-2.019.4-.808"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_47"
              data-name="Path 47"
              d="M1241.172,428.938l3.07,3.393"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_48"
              data-name="Path 48"
              d="M1241.172,426.272l6.058,6.624"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_49"
              data-name="Path 49"
              d="M1241.172,423.041l8.078,8.886"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_50"
              data-name="Path 50"
              d="M1243.679,421.667l8.56,9.532"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_51"
              data-name="Path 51"
              d="M1245.7,420.375l8.966,9.936"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_52"
              data-name="Path 52"
              d="M1249.417,419.244l7.749,8.563"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M0,0,14.056,15.348"
              transform="matrix(1, 0.017, -0.017, 1, 24.129, 4.442)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_54"
              data-name="Path 54"
              d="M1247.231,409.8l14.863,16.064"
              transform="translate(-1222.27 -407.773)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_55"
              data-name="Path 55"
              d="M1253.292,413.913l10.175,10.421"
              transform="translate(-1220.9 -407.652)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
          </g>
          <g
            id="Mountain_4"
            data-name="Mountain 4"
            transform="translate(353.586 399.344)"
          >
            <path
              id="Path_56"
              data-name="Path 56"
              d="M1292.386,424.979l6.462-3.554,2.5-1.616,2.019-2.019a13.257,13.257,0,0,1,1.535-1.05l2.423-.323,1.939-.4,2.019-.565,2.423-1.454s1.212-1.292,1.535-1.7a19.364,19.364,0,0,1,1.7-1.858c.323-.242,1.373-.889,2.02-1.373a13.324,13.324,0,0,1,2.343-1.454c.485-.162,1.616-.646,1.616-.646"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_57"
              data-name="Path 57"
              d="M1317.185,406s-1.373,1.05-1.616,1.292-1.05.4-1.615,1.131-1.777,2.019-1.777,2.019l-1.939,2.181-1.858,1.535-1.292,1.292-1.05,1.05"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_58"
              data-name="Path 58"
              d="M1292.386,434.915l2.989-1.454a7.808,7.808,0,0,1,1.373-.969,7.689,7.689,0,0,0,1.7-1.131c.323-.323,1.131-1.212,1.535-1.616s.081-.565,1.05-1.05a12.319,12.319,0,0,1,2.019-1.05c.646-.162,1.7-.565,2.181-.727s1.7-.727,1.7-.727"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_59"
              data-name="Path 59"
              d="M1311.127,421.667l-1.939,2.1-1.777,1.858-1.615,1.858a5.886,5.886,0,0,1-1.131,1.535,23.757,23.757,0,0,0-1.7,1.939c-.242.242-1.535,1.7-1.7,1.939s-1.535.808-2.1,1.212-1.454.727-2.1,1.212-1.7,1.535-2.181,1.939-2.019,1.212-2.989,2.1-1.212,1.131-1.212,1.131"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_60"
              data-name="Path 60"
              d="M1304.1,444.043s1.292-1.05,1.454-1.7a8.409,8.409,0,0,1,.646-1.616,12.908,12.908,0,0,0,.646-1.858c.162-.565-.162-.4,0-.969s-.081-.485,0-1.454-.323-.808,0-1.777a11.168,11.168,0,0,1,1.212-2.423c.323-.485.727-1.293,1.131-1.777s1.212-1.212,1.7-1.7.4-.485.889-.969-.162-.081.808-1.05,1.05-1.292,1.05-1.292"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_61"
              data-name="Path 61"
              d="M1310.238,441.458l5.735-9.532"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_62"
              data-name="Path 62"
              d="M1320.82,437.823l2.019-2.262,1.616-1.131,2.181-1.616a4.322,4.322,0,0,0,.485-1.05,2.09,2.09,0,0,0-.485-1.535,3.839,3.839,0,0,0-1.7-.969,5.952,5.952,0,0,1-1.131-.323c-.242-.162-1.373-.808-1.777-1.131s-.666-.343-.889-.969.162-.485,0-1.535-.323-2.02-.323-2.02-2.02-.889-2.343-1.131-2.423-1.777-2.827-2.019a4.522,4.522,0,0,1-1.292-.969c-.323-.424-.081-.4,0-.727a16.473,16.473,0,0,1,2.746-1.858s1.616-.646,2.02-.889a6.325,6.325,0,0,1,2.02-1.212c1.212-.4,2.746-.727,3.8-1.131s1.616-.969,2.585-1.292,3.312-.646,3.716-.808,1.293-.323,1.858-.565,1.131-.323,1.212-.646.889-.646,0-1.131-2.262-1.131-2.262-1.131a4.077,4.077,0,0,1-1.454-.727c-.727-.565-.969-.727-.969-1.212s.646-.727,0-1.939a4.939,4.939,0,0,0-2.1-2.423,11.4,11.4,0,0,1-1.939-1.05,6.635,6.635,0,0,0-1.131-1.373c-.646-.565-.565-.565-.646-.969s-.323-1.454,0-1.939.808-.646,1.131-1.292a9.165,9.165,0,0,0,.646-1.535,3.651,3.651,0,0,0,0-.969"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_63"
              data-name="Path 63"
              d="M1322.921,436.021l2.666,2.672"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_64"
              data-name="Path 64"
              d="M1323.846,434.915l5.344,5.207"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_65"
              data-name="Path 65"
              d="M1325.586,433.474l6.462,5.592"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_66"
              data-name="Path 66"
              d="M1327.326,431.547l5.406,4.847"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_67"
              data-name="Path 67"
              d="M1323.349,424.588l9.942,8.513"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_68"
              data-name="Path 68"
              d="M1318.751,418.125s6.462,5.344,6.711,5.592a15.163,15.163,0,0,0,1.926,1.616c.683.435.621.5,1.181.808s.683.373,2.175,1.3a16.488,16.488,0,0,1,2.61,2.051"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_69"
              data-name="Path 69"
              d="M1320.056,415.391s2.734,1.864,3.045,2.175,1.553,1.367,1.8,1.553a9.424,9.424,0,0,1,1.181,1.056c.684.684,1.181,1.243,1.678,1.678a13.671,13.671,0,0,0,1.119.87,20.622,20.622,0,0,1,1.678,1.367c.683.621.559.5,1.616,1.429s1.553,1.367,2.113,1.864,1.243,1.118,1.243,1.118"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_70"
              data-name="Path 70"
              d="M1323.846,414.335l3.045,2.61c.435.373.994.932,1.553,1.367s2.61,2.175,3.045,2.486.311,0,1.056.932a21.417,21.417,0,0,0,1.429,1.74,9.548,9.548,0,0,0,1.864,1.74,8.11,8.11,0,0,1,1.429.932c.621.559,2.423,2.548,2.423,2.548"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_71"
              data-name="Path 71"
              d="M1326.518,412.906s3.6,2.983,4.039,3.418,6.338,5.965,6.773,6.338,4.66,3.915,4.66,3.915"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_72"
              data-name="Path 72"
              d="M1330.029,411.247s4.256,3.9,4.816,4.393,3.6,3.48,4.039,3.915,1.926,1.926,2.61,2.486,3.169,2.175,3.417,2.361,2.734,1.926,2.734,1.926"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_73"
              data-name="Path 73"
              d="M1333.851,410.3s3.666,3.169,4.1,3.6,1.988,2.113,2.548,2.61,1.615,1.553,2.361,2.175,1.926,1.678,2.672,2.237,2.983,2.548,2.983,2.548"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_74"
              data-name="Path 74"
              d="M1330.029,404.331c.59.186,5.313,4.287,5.748,4.66s2.92,2.423,3.48,2.921,2.8,2.051,3.666,2.734,3.48,3.231,3.48,3.231"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_75"
              data-name="Path 75"
              d="M1324.459,396.812s7.651,5.961,8.293,6.6,2.247,2.307,2.825,2.82,2.055,1.666,2.633,2.115,1.991,1.731,2.568,2.307,2.633,2.436,2.633,2.436"
              transform="translate(-1291.302 -392.841)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
            <path
              id="Path_76"
              data-name="Path 76"
              d="M1325.151,394.389s6.525,5.406,7.084,5.841,2.485,2.237,3.231,2.858,1.8,1.367,2.423,1.926,2.61,2.3,2.92,2.672a8.91,8.91,0,0,0,.808.808"
              transform="translate(-1290.69 -392.344)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="1"
            />
          </g>
        </g>
        <path
          id="Path_4"
          data-name="Path 4"
          d="M975.572,580.084s-6.556-10.754,3.662-21.076c9.221-9.315,32.955-16.945,51.054-27.687,37.395-22.193,57.746-27.713,93.2-39.1s26.6-6.761,42.907-14.01,22.643-10.465,21.16-13.925-.472-5.033-8.716-8.966a153.856,153.856,0,0,0-18.6-6.8c-3.672-1.161-11.1-2.329-9.488-5.1"
          transform="translate(-937)"
          fill="none"
          stroke="#264d94"
          stroke-width="0.5"
        />
        <path
          id="Path_5"
          data-name="Path 5"
          d="M947.711,560.019c8.965-9.205,50.007-25.673,67.6-36.287,21.924-13.224,42.891-17.972,59.485-24.854,10.47-4.343,25.72-6.926,39.405-11.391a230.569,230.569,0,0,0,34.551-14.961s5.86-2.479,6.788-5.221"
          transform="translate(-904.051)"
          fill="none"
          stroke="#264d94"
          stroke-width="0.5"
        />
        <path
          id="Path_7"
          data-name="Path 7"
          d="M991.581,579.793c-.914-.9-7.943-16.629,0-21.306-.109.057,105.778-58.2,153.1-70.75,9.136-2.422,32.045-13.421,32.045-13.421s11.764-8.45,6.3-15.575c-10.047-8.9-28.16-13.849-33.364-15.282-3.771-.754-3.63-2.774-4.978-3.017"
          transform="translate(-928.761 2.192)"
          fill="none"
          stroke="#213a6b"
          stroke-width="0.5"
        />
        <g id="Path_Grass" data-name="Path Grass" transform="translate(-96 22)">
          <g
            id="Left_Path"
            data-name="Left Path"
            transform="translate(-927 222)"
          >
            <path
              id="Path_98"
              data-name="Path 98"
              d="M1064.773,362.633l2.5,1.784"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_99"
              data-name="Path 99"
              d="M1066.732,362.155l1.5,2.633"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_100"
              data-name="Path 100"
              d="M1067.482,361l2.774,5.309"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_101"
              data-name="Path 101"
              d="M1071.6,366.441l-.283-4.438s.783-2.067.783-2.176.892-1.719.892-1.719"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_102"
              data-name="Path 102"
              d="M1070.256,364.918l-.609-3.655"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_103"
              data-name="Path 103"
              d="M1070.909,361.437c-.043-.065-.392-2.241-.392-2.241"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_104"
              data-name="Path 104"
              d="M1069.386,361.263v-3.22"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_105"
              data-name="Path 105"
              d="M1067.482,359.892l2.034-5.047"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_106"
              data-name="Path 106"
              d="M1067.036,358.717c.022-.087.37-2.915.37-2.915l1.349-1.936"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_107"
              data-name="Path 107"
              d="M1067.689,352.1l-.392,3.7"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_108"
              data-name="Path 108"
              d="M1066.732,356.846l-.979-.7-.152-1.958s-.109-.74-.109-.87l.008-.324-.008-1.068c-.044-.087-.2-.131.109-.587a5.455,5.455,0,0,1,.7-.827"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_109"
              data-name="Path 109"
              d="M1064.447,354.845l.631-2.306"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_110"
              data-name="Path 110"
              d="M1064.926,349.232l-1.153,3.372-.174,1.349"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_111"
              data-name="Path 111"
              d="M1063.207,352.1s-.218-1.023-.239-1.2a7.335,7.335,0,0,1-.239-1.11,9.782,9.782,0,0,1,.239-1.284c.087-.5.239-1.218.239-1.218"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_112"
              data-name="Path 112"
              d="M1062.01,349.819a13.674,13.674,0,0,1-.348-1.74v-1.284a6.4,6.4,0,0,1,0-.914c.044-.457.13-.718-.087-1.044a6.03,6.03,0,0,0-1.044-.914"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_113"
              data-name="Path 113"
              d="M1062.01,344.576l.631-1.327"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_114"
              data-name="Path 114"
              d="M1062.533,347.078l-.239-2.371"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_115"
              data-name="Path 115"
              d="M1061.6,343.531c0-.152.522-1.893.522-2.023a2.915,2.915,0,0,1,.239-.979l.522-1.088h0"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_116"
              data-name="Path 116"
              d="M1061.053,341.726s.413-2.2.435-2.306a3.711,3.711,0,0,1,.544-.8,5.271,5.271,0,0,1,.609-.522"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_117"
              data-name="Path 117"
              d="M1062.01,335.852l-.479,1.632s-.348.761-.392.87-.174.544-.174.544"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_118"
              data-name="Path 118"
              d="M1060.531,348.971s-.827-2.763-.849-2.828-1.284-2.546-1.284-2.546"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_119"
              data-name="Path 119"
              d="M1059.313,347.208l-.2,1.175"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_120"
              data-name="Path 120"
              d="M1055.658,345.685l1.349,1.784"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_121"
              data-name="Path 121"
              d="M1057.007,345.141l.761,1.24.326,1.023h0"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_122"
              data-name="Path 122"
              d="M1058.4,346.12l-.3,1.784"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <g id="First_Test" data-name="First Test">
              <path
                id="Path_77"
                data-name="Path 77"
                d="M1085.027,410.494l-2.5,2.522h-1.03l6.582-6.839-6.986,4.89"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_78"
                data-name="Path 78"
                d="M1087.527,404.265l-5.7,4.6,5.883-8.751-3.861,3.861.257-1.765-.7-.184,5.368-5.662-5.368,4.228,5.662-7.1"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_79"
                data-name="Path 79"
                d="M1083.078,399.706l3.493-5.4-2.684,1.949,3.861-5.846"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_80"
                data-name="Path 80"
                d="M1080.945,398.529l5.221-7.207"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_81"
                data-name="Path 81"
                d="M1082.2,397.794l1.066-.809-1.066,2.169.515.552"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_82"
                data-name="Path 82"
                d="M1084.585,392.316l.846-3.971.147-.846.552-.993,1.324-1.508"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_83"
                data-name="Path 83"
                d="M1087.012,387.793l-1.875,3.2"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_84"
                data-name="Path 84"
                d="M1083.556,390.4c.331-.441,3.9-7.39,3.9-7.39"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_85"
                data-name="Path 85"
                d="M1084.217,387.315l1.35-3.393.157-.395a15.563,15.563,0,0,0,.588-1.581c.073-.368.4-1.985.4-1.985"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_86"
                data-name="Path 86"
                d="M1085.5,383.013l-2.39,4.265,1.875-6.177.515-4.339"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_87"
                data-name="Path 87"
                d="M1084.585,379.961l-2.353,4.522"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_88"
                data-name="Path 88"
                d="M1085.137,374.724s-1.524,3.762-1.524,3.96a10.484,10.484,0,0,1-.453,1.3l-.421,1.746s-.024,1.017-.032.149,0-3.62,0-3.62-1.131,3.656-1.329,3.451a27.829,27.829,0,0,1,.537-4.271s-1.2.792-1.329.481.792-1.725.792-1.725.82-1.612.848-1.7a17.114,17.114,0,0,1,.933-1.952c.17-.17.82-.962.82-.962"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_89"
                data-name="Path 89"
                d="M1083.114,369.548s-1.594,2.687-1.651,2.857-.594,1.895-.707,2.15-.481,2.178-.481,2.178"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_90"
                data-name="Path 90"
                d="M1082.51,366.833a25.975,25.975,0,0,0-1.386,2.574,17.792,17.792,0,0,1-.566,1.838c-.17.509-.453,2.065-.453,2.065l-.311-8.061"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_91"
                data-name="Path 91"
                d="M1079.37,371.3l-.905-.792.226-.99"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_92"
                data-name="Path 92"
                d="M1078.465,367.936a13.067,13.067,0,0,0-.594,2.291"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_93"
                data-name="Path 93"
                d="M1077.221,369.689l-.17-2.6a5.043,5.043,0,0,1,.17-1.838,10.949,10.949,0,0,0,.651-1.1"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_94"
                data-name="Path 94"
                d="M1076.655,363.071l-.4,1.216s-.113.792-.2,1.1-.2,1.3-.255,1.5-.17,1.386-.17,1.386l-.368-2.517-.537-.82a4.225,4.225,0,0,0,0-.651c-.028-.339.057-.764,0-1.216a10.358,10.358,0,0,0-.2-1.018"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_95"
                data-name="Path 95"
                d="M1074.534,365.645l-.566,2.093"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_96"
                data-name="Path 96"
                d="M1073.657,366.917l-.17-1.81"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
              <path
                id="Path_97"
                data-name="Path 97"
                d="M1072.7,362.42v4.1"
                fill="none"
                stroke="#184194"
                stroke-width="0.5"
              />
            </g>
          </g>
          <g
            id="Left_Path-2"
            data-name="Left Path"
            transform="translate(-927 222)"
          >
            <path
              id="Path_123"
              data-name="Path 123"
              d="M1155.651,409.453s-1.958,2.741-1.958,2.828a2.258,2.258,0,0,1-.218.457v.5"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_124"
              data-name="Path 124"
              d="M1154.345,407.648l-.8,1.806a7.505,7.505,0,0,1-.283.827,5.819,5.819,0,0,1-.457.892,5.454,5.454,0,0,0-.609.914,7.9,7.9,0,0,0,0,1.023"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_125"
              data-name="Path 125"
              d="M1153.259,404.058l-1.328,4.177a10.18,10.18,0,0,0-.5,1.24c-.043.261-.109,1.349-.152,1.523s0,2.045,0,2.045"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_126"
              data-name="Path 126"
              d="M1153.062,401.991s-.957,1.566-1.023,1.7-.74,1.24-.87,1.436a10.379,10.379,0,0,0-.544,1.284c-.109.3-.522,1.653-.609,1.936s-.326,2.393-.326,2.393"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_127"
              data-name="Path 127"
              d="M1152.172,400.207s-.895,1.371-.938,1.523a12.582,12.582,0,0,1-.457,1.24c-.109.2-.587,1-.7,1.24s-.457,1.262-.566,1.523-.326,1.5-.37,1.653-.283,1.436-.283,1.436v-7.854s.087-.979.087-1.153a3.116,3.116,0,0,0-.087-1.088c-.13-.2-.435-.783-.435-.783"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_128"
              data-name="Path 128"
              d="M1148.515,404.275s-.522,1.458-.522,1.588-.392,1.458-.392,1.458"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_129"
              data-name="Path 129"
              d="M1147.144,398.314c.044.152.479,1.523.457,1.632s.022,1.131,0,1.458.022.957,0,1.588.022,1.023,0,1.349,0,1.566,0,1.566v.957"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_130"
              data-name="Path 130"
              d="M1146.535,404.167l.957-3.046"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_131"
              data-name="Path 131"
              d="M1145.686,403.492s.087-1.632.152-1.958a7.89,7.89,0,0,1,.37-1.458c.218-.544.37-1,.609-1.479a10.677,10.677,0,0,1,.718-1.284c.3-.457.544-1.044.892-1.566a10.654,10.654,0,0,1,.783-1.11c.326-.392,1.284-1.588,1.284-1.588"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_132"
              data-name="Path 132"
              d="M1149.689,391.026s-1.131,1.588-1.262,1.784-.522.761-.761,1.153-.957,1.414-1.088,1.675-.522.979-.87,1.61-.326.653-.587,1.175a4.3,4.3,0,0,0-.261,1.5"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_133"
              data-name="Path 133"
              d="M1144.859,398.314c0-.131.239-1.392.3-1.828s.3-1.218.435-2,.239-1.458.37-2.089a9.31,9.31,0,0,1,.566-1.784,15.412,15.412,0,0,1,.827-1.871c.3-.522.7-1.175.7-1.175"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_134"
              data-name="Path 134"
              d="M1145.316,393.789s-.435,1.044-.522,1.392-.392,1.131-.609,1.675a8.28,8.28,0,0,0-.239,1.958"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_135"
              data-name="Path 135"
              d="M1143.619,396.6c.044-.152.261-1.11.3-1.5a6.1,6.1,0,0,1,.457-1.349"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_136"
              data-name="Path 136"
              d="M1144.163,390.286s-.326,1.218-.479,1.719-.283,1.2-.413,1.61a3.4,3.4,0,0,0-.2,1.023c-.022.413,0,.892,0,.892"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_137"
              data-name="Path 137"
              d="M1142.575,392.309a7.613,7.613,0,0,1,.174-1.24,7.442,7.442,0,0,1,.674-1.74c.348-.609.566-1,.979-1.61a14.873,14.873,0,0,1,1.436-1.828c.413-.413.957-.979.957-.979"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_138"
              data-name="Path 138"
              d="M1143.619,385.065c.044.065-.609,1.044-.74,1.414s-.544,1.458-.805,2.045a6.293,6.293,0,0,0-.609,1.762,4.827,4.827,0,0,0,0,1.066v-4.873a7.69,7.69,0,0,1,.326-2.2,13.339,13.339,0,0,1,.674-1.371"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_139"
              data-name="Path 139"
              d="M1140.508,389.024c.022-.131.131-1.61.174-1.893a4.834,4.834,0,0,1,.413-.957"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_140"
              data-name="Path 140"
              d="M1140.182,386.783a14.594,14.594,0,0,1-.218-1.915c.044-.283.152-.74.218-1.284a10,10,0,0,0,0-1.653"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_141"
              data-name="Path 141"
              d="M1137.615,382.519c.022-.2.457-1.284.609-1.784s.239-1.218.413-1.893.327-.957.413-1.5a10.607,10.607,0,0,0,.13-1.915c-.022-.653-.13-2.11-.13-2.11s.479,4.612.479,4.765.13,1.153.13,1.61v1.588"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_142"
              data-name="Path 142"
              d="M1140.216,381.605s.14-3.176.161-3.242"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_143"
              data-name="Path 143"
              d="M1141.1,383.5s.218-2.807.174-3.35-.087-1.24-.087-1.915a10.242,10.242,0,0,0-.087-1.849,9.621,9.621,0,0,0-.718-1.806"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_144"
              data-name="Path 144"
              d="M1142.4,382.28s-.087-2.284-.087-2.72a9.779,9.779,0,0,1,.174-1.784,13.09,13.09,0,0,1,.783-2.023"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_145"
              data-name="Path 145"
              d="M1143.271,383.824c.065-.087.261-5.309.261-5.309"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_146"
              data-name="Path 146"
              d="M1144.011,381.605l.283-1.066.7,1.066"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_147"
              data-name="Path 147"
              d="M1145.186,381.779s-.065-2.5,0-3.046.37-4.873.37-4.873"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_148"
              data-name="Path 148"
              d="M1136.831,381.932c0-.044.718-1.98.718-1.98l.479-2.72"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_149"
              data-name="Path 149"
              d="M1135.918,380.409s.326-1.7.413-2.067.413-1.2.7-2.023,1.131-2.676,1.131-2.676"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_150"
              data-name="Path 150"
              d="M1136.7,371.967s-.3,1.7-.326,2a15.627,15.627,0,0,1-.239,1.762c-.087.283-.348,1.044-.413,1.24s-.7-1.392-.7-1.392v-1.893"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_151"
              data-name="Path 151"
              d="M1134.482,375.339s-.174-1.327-.2-1.545a7.132,7.132,0,0,1,0-1.806c.13-.392.87-1.828.87-1.828"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_152"
              data-name="Path 152"
              d="M1133.481,375.927l.587-1.871"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_153"
              data-name="Path 153"
              d="M1132.415,374.252v-5.113"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_154"
              data-name="Path 154"
              d="M1132.741,371.576l1.2-2.567"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_155"
              data-name="Path 155"
              d="M1131.24,371.7a11.161,11.161,0,0,0,0-1.925c-.109-.413-.326-1.131-.479-1.632a2.608,2.608,0,0,1-.218-1.523,8.165,8.165,0,0,0,.087-1.588"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_156"
              data-name="Path 156"
              d="M1129.913,370.771c0-.152.457-1.849.457-1.915v-1.5"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_157"
              data-name="Path 157"
              d="M1129.347,369.444s-.174-1.088-.174-1.24-.044-1.349,0-1.566a8.146,8.146,0,0,0,0-1.044"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_158"
              data-name="Path 158"
              d="M1128.607,368.361c-.13-.332-.609-1.115-.718-1.333s-.457-1.153-.457-1.153-.261-.609-.3-.7a1.426,1.426,0,0,1-.261-.74c.022-.326.109-1.806.109-1.806"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_159"
              data-name="Path 159"
              d="M1126.454,365.593a13.365,13.365,0,0,1-.544-1.327,2.248,2.248,0,0,1-.2-1c.022-.653-.174-1.131.2-1.7s1.2-1.784,1.2-1.784"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_160"
              data-name="Path 160"
              d="M1125.279,366.332v-2.654"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_161"
              data-name="Path 161"
              d="M1124.822,364c-.044-.087-.522-1.371-.674-1.741a10.122,10.122,0,0,1-.435-1.392c-.065-.326-.283-1.023-.283-1.023V364.5s-.979-1.305-1.175-1.545a10.2,10.2,0,0,1-.914-1.24,3.08,3.08,0,0,1-.348-1.284c.043-.218.13-3.5.13-3.5a1.936,1.936,0,0,1,.218-.8c.2-.3.588-.827.588-.827"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_162"
              data-name="Path 162"
              d="M1121.08,361.959c-.022.2-.131,1.936-.131,1.936"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_163"
              data-name="Path 163"
              d="M1120.987,363.569l-.886-2.045a5.784,5.784,0,0,1-.5-1.284,6.867,6.867,0,0,1,0-.718"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_164"
              data-name="Path 164"
              d="M1119.361,362.786a4,4,0,0,0,0-1.153,7.621,7.621,0,0,1-.479-1.2,9.286,9.286,0,0,1,0-1.11,5.968,5.968,0,0,0-.218-1.588,3.771,3.771,0,0,0-.522-.87"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_165"
              data-name="Path 165"
              d="M1118.776,362.438c.041-.065-.764-1.828-.764-1.828l-.522-.544"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_166"
              data-name="Path 166"
              d="M1117.1,357.521l-.522,1.7s-.218.936-.283,1.284-.109,1.458-.109,1.458"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_167"
              data-name="Path 167"
              d="M1115.641,360.872a7.634,7.634,0,0,1-.326-1.305c0-.131-.065-.7-.109-1.262s.2-3.176.2-3.176"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_168"
              data-name="Path 168"
              d="M1114.771,360.523c.022-.131-.413-1.392-.457-1.588s-.13-1.61-.13-1.61"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_169"
              data-name="Path 169"
              d="M1112.225,359.24c0-.065.174-1.784.174-2.023a6.485,6.485,0,0,1,.326-1.784c.2-.37.435-.936.435-.936"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_170"
              data-name="Path 170"
              d="M1113.813,359.24s-.544-.979-.566-1.088a3.265,3.265,0,0,1-.131-1.066,3.077,3.077,0,0,1,.239-.7"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_171"
              data-name="Path 171"
              d="M1111.7,353.5s-.239,1.849-.239,2.2.13,1.284.13,1.632a6.6,6.6,0,0,1-.13.979"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_172"
              data-name="Path 172"
              d="M1111.2,357.913s-.522-1.284-.566-1.436-.435-1.653-.435-1.653"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_173"
              data-name="Path 173"
              d="M1109.941,357.815a4.678,4.678,0,0,1-.587-.729c-.043-.152-.3-.783-.326-.914s-.131-.849-.152-1.11.152-1.784.152-1.784"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_174"
              data-name="Path 174"
              d="M1108.592,357.151a6.8,6.8,0,0,1-.914-.7,2.717,2.717,0,0,1-.174-1.305c.087-.544.174-1.893.174-1.893"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_175"
              data-name="Path 175"
              d="M1106.242,356.368c0-.174.13-2.937.087-3.22a2.748,2.748,0,0,1,.239-1.566c.3-.544,1.414-1.936,1.414-1.936"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_176"
              data-name="Path 176"
              d="M1105.546,351.364s-.2,1.719-.239,1.871-.283,1.044-.37,1.479a2.661,2.661,0,0,0,0,.892"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_177"
              data-name="Path 177"
              d="M1104.393,353.844a5.2,5.2,0,0,0-.174-1.414,15.776,15.776,0,0,1-.631-1.958c-.109-.674-.3-1.849-.3-1.849"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_178"
              data-name="Path 178"
              d="M1104.306,353.844l-.479,1.088"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_179"
              data-name="Path 179"
              d="M1103.522,354.192s-.348-1.066-.5-1.414-.609-1.305-.609-1.305"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_180"
              data-name="Path 180"
              d="M1102.522,352.474v1.849"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_181"
              data-name="Path 181"
              d="M1102.13,353.714c-.087-.152-.522-1.24-.674-1.719s-.457-.609-.413-1.436.152-2.48.152-2.48"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_182"
              data-name="Path 182"
              d="M1100.129,352.147c0-.152.74-2.306.74-2.306"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_183"
              data-name="Path 183"
              d="M1099.345,351.364c0-.065.109-1.458.2-1.98A3.839,3.839,0,0,1,1100,347.9c.326-.587,1.153-1.806,1.153-1.806"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_184"
              data-name="Path 184"
              d="M1098.932,345.446v5.939"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_185"
              data-name="Path 185"
              d="M1098.257,350.646a7.358,7.358,0,0,1-.392-1.023c-.044-.261.022-.631,0-1.349s0-1.088,0-1.088"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_186"
              data-name="Path 186"
              d="M1097.453,350.233a5.85,5.85,0,0,1-.631-1.327c0-.283.109-.8.13-1.023"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_187"
              data-name="Path 187"
              d="M1096.321,349.058a4.775,4.775,0,0,1-.326-1.675c.044-.522.283-1.218.326-1.675a3.116,3.116,0,0,1,.283-.936"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_188"
              data-name="Path 188"
              d="M1095.755,345.86c-.044.2,0,3.024,0,3.024"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_189"
              data-name="Path 189"
              d="M1094.3,347.535v-1.784a7.373,7.373,0,0,1,.239-1.849,10.77,10.77,0,0,1,.653-1.74,12.283,12.283,0,0,1,1.153-1.414"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_190"
              data-name="Path 190"
              d="M1093.732,346.338s-.261-1.545-.326-1.741a2.651,2.651,0,0,1-.457-1.218c-.109-.848-.109-1.022-.152-1.479a16.575,16.575,0,0,0-.631-2.067"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_191"
              data-name="Path 191"
              d="M1092.818,344.359l-.239,1.044s-.7-.239-.74-.587l-.3-1.479h0"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_192"
              data-name="Path 192"
              d="M1091.208,345.12s-.261-.87-.348-1.262a6.192,6.192,0,0,1-.131-1.305c-.022-.653-.022-.957,0-1.523a6.142,6.142,0,0,0,0-.761"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_193"
              data-name="Path 193"
              d="M1089.381,342.466a16.118,16.118,0,0,0,.283-2.067,4.1,4.1,0,0,1,.152-1.61,9.98,9.98,0,0,1,1.24-1.936"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_194"
              data-name="Path 194"
              d="M1088.968,341.073a5.545,5.545,0,0,1-.326-1.11c-.087-.544.218-1.327,0-1.936a14.764,14.764,0,0,1-.413-2.023"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_195"
              data-name="Path 195"
              d="M1088.228,337.962s-.283,1.7-.348,1.762-.413.435-.413.435"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_196"
              data-name="Path 196"
              d="M1087.183,339.289c-.043-.174.022-1.284,0-1.7s0-1.915,0-1.915"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_197"
              data-name="Path 197"
              d="M1086.335,339.659c0-.239-.065-1.784,0-1.98a3.107,3.107,0,0,0-.239-1.131,5.33,5.33,0,0,0-.435-1,6.576,6.576,0,0,0-1.066-.892c-.435-.261-1.632-.87-1.632-.87"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_198"
              data-name="Path 198"
              d="M1084.312,333.546c.065.044,1.806,1.545,1.806,1.545l.544,1.11"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
          </g>
          <g
            id="Right_Shading"
            data-name="Right Shading"
            transform="translate(-927 222)"
          >
            <path
              id="Path_199"
              data-name="Path 199"
              d="M1080.719,335.852h4.016"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_200"
              data-name="Path 200"
              d="M1081.578,336.656h2.016l1.75-.2"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_201"
              data-name="Path 201"
              d="M1081.266,337.406l2.234-.234h2.172"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_202"
              data-name="Path 202"
              d="M1080.719,337.969h2.172l1-.312s.969.016,1.016,0,.875,0,.875,0"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_203"
              data-name="Path 203"
              d="M1082.516,339.188h3.656"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_204"
              data-name="Path 204"
              d="M1083.461,340.266h3.242"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_205"
              data-name="Path 205"
              d="M1084.984,341.469l3.547-.078"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_206"
              data-name="Path 206"
              d="M1084.734,342.641h4.828"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_207"
              data-name="Path 207"
              d="M1085.406,343.484c.188-.016,5.047,0,5.047,0"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_208"
              data-name="Path 208"
              d="M1087.469,344.313h3.078"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_209"
              data-name="Path 209"
              d="M1087.3,345.719h4.234"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_210"
              data-name="Path 210"
              d="M1089.484,346.8h4.469"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_211"
              data-name="Path 211"
              d="M1089.719,347.844h4.641"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_212"
              data-name="Path 212"
              d="M1090.547,348.719h5.078"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_213"
              data-name="Path 213"
              d="M1091.969,349.375h4.516"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_214"
              data-name="Path 214"
              d="M1090.875,350.188h5.8"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_215"
              data-name="Path 215"
              d="M1092.469,351.609h2.172l.359-.437h2.813"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_216"
              data-name="Path 216"
              d="M1094.8,352.016h4.625"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_217"
              data-name="Path 217"
              d="M1096,352.672l4.531-.2"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_218"
              data-name="Path 218"
              d="M1096.672,353.469h3.828l1.016-.2"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_219"
              data-name="Path 219"
              d="M1096.953,354.359l2.656.078.641.516,3.188-.281"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_220"
              data-name="Path 220"
              d="M1097.109,355.781h7.484"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_221"
              data-name="Path 221"
              d="M1099.7,356.594h6.5"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_222"
              data-name="Path 222"
              d="M1101.609,357.641h7.875"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_223"
              data-name="Path 223"
              d="M1102.813,358.953h4.313l4.391-.469"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_224"
              data-name="Path 224"
              d="M1105.656,359.906h3.609l.328-.641h2.672"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_225"
              data-name="Path 225"
              d="M1107.641,360.781h2.328l.484-.312,1.656-.078,2.672.078"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_226"
              data-name="Path 226"
              d="M1109.8,361.672h6.391"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_227"
              data-name="Path 227"
              d="M1112.594,362.828h6.7"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_228"
              data-name="Path 228"
              d="M1114.344,363.844h6.219"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_229"
              data-name="Path 229"
              d="M1116.188,364.75c.016-.016,4.328,0,4.328,0l.266-.609h2.438"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_230"
              data-name="Path 230"
              d="M1117.078,365.344a26.582,26.582,0,0,1,4.156,0l2.906-.406"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_231"
              data-name="Path 231"
              d="M1121.031,365.859h4.578"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_232"
              data-name="Path 232"
              d="M1118.8,366.984l8.656-.078"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_233"
              data-name="Path 233"
              d="M1120.328,367.984h3.484l1.891-.391h2.656"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_234"
              data-name="Path 234"
              d="M1121.8,369.125h2.641l1.578-.375,2.453-.094"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_235"
              data-name="Path 235"
              d="M1124.031,369.7l5.063-.125"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_236"
              data-name="Path 236"
              d="M1122.125,371.188a11.655,11.655,0,0,0,1.344,0l.281-.516,1.625-.078.906-.266a6.564,6.564,0,0,0,1.109,0l2.188-.172h0"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_237"
              data-name="Path 237"
              d="M1124.031,371.328h6.953"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_238"
              data-name="Path 238"
              d="M1123.656,372.266l7.891-.125"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_239"
              data-name="Path 239"
              d="M1123.172,373.625h9.281"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_240"
              data-name="Path 240"
              d="M1122.672,374.453l10.625-.078"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_241"
              data-name="Path 241"
              d="M1125.078,375.625h7.016"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_242"
              data-name="Path 242"
              d="M1126.031,376.688c.047-.016,6.578,0,6.578,0"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_243"
              data-name="Path 243"
              d="M1127.188,377.563h8.188"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_244"
              data-name="Path 244"
              d="M1129.719,379.141l6.531-.094"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_245"
              data-name="Path 245"
              d="M1129.531,380.3l6.469.094"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_246"
              data-name="Path 246"
              d="M1129.813,381.359h7.656"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_247"
              data-name="Path 247"
              d="M1130.516,382.453l7.438.063"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_248"
              data-name="Path 248"
              d="M1130.766,383.5s6.359.031,6.422,0"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_249"
              data-name="Path 249"
              d="M1131.078,384.453h8.906"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_250"
              data-name="Path 250"
              d="M1131.406,384.813h8.672"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_251"
              data-name="Path 251"
              d="M1128.969,385.766h2.156l1.2.375,1.313.078,2.25.063,4.031-.141"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_252"
              data-name="Path 252"
              d="M1131.016,387.016s8.984-.187,9-.094"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_253"
              data-name="Path 253"
              d="M1130.406,388.406l4.406.125"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_254"
              data-name="Path 254"
              d="M1133.094,387.766l7.422.094"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_255"
              data-name="Path 255"
              d="M1134.813,388.641l5.688.063"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_256"
              data-name="Path 256"
              d="M1130.25,389.438h2.172"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_257"
              data-name="Path 257"
              d="M1132.016,389.859h9.094"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_258"
              data-name="Path 258"
              d="M1131.531,390.844h4.969"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_259"
              data-name="Path 259"
              d="M1136.422,390.609l4.969.063"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_260"
              data-name="Path 260"
              d="M1132.609,392.047l9.2-.2"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_261"
              data-name="Path 261"
              d="M1134.016,392.859l8.328-.109"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_262"
              data-name="Path 262"
              d="M1132.922,393.953c.188.047,2.5-.109,2.5-.109"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_263"
              data-name="Path 263"
              d="M1134.813,394.3l3.5.109"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_264"
              data-name="Path 264"
              d="M1137.031,393.734c.063.047,6.172,0,6.172,0"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_265"
              data-name="Path 265"
              d="M1137.906,394.656h5.391"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_266"
              data-name="Path 266"
              d="M1133.719,395.688c.109,0,9.609.094,9.609.094"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_267"
              data-name="Path 267"
              d="M1135.781,396.781h7.984"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_268"
              data-name="Path 268"
              d="M1134.609,397.688h9.234"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_269"
              data-name="Path 269"
              d="M1137.734,399.219h6.906"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_270"
              data-name="Path 270"
              d="M1138.922,400.172l6.344-.109"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_271"
              data-name="Path 271"
              d="M1137.328,401.016h8.7"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_272"
              data-name="Path 272"
              d="M1134.813,401.828H1145.3"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_273"
              data-name="Path 273"
              d="M1133.344,403.281c.2-.016,12.563,0,12.563,0"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_274"
              data-name="Path 274"
              d="M1136.25,404.2l8.5-.094"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_275"
              data-name="Path 275"
              d="M1136.875,405.3l7.625.078"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_276"
              data-name="Path 276"
              d="M1135.406,406.172l11.969.109"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_277"
              data-name="Path 277"
              d="M1137.391,407.234h10.234"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_278"
              data-name="Path 278"
              d="M1138.844,408.2l9.609-.125"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_279"
              data-name="Path 279"
              d="M1139.813,409.219l9.391-.141"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_280"
              data-name="Path 280"
              d="M1139.438,410.109H1149.5"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_281"
              data-name="Path 281"
              d="M1139.984,410.922h10.094"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
            <path
              id="Path_282"
              data-name="Path 282"
              d="M1145.094,411.813l5.906.141"
              fill="none"
              stroke="#184194"
              stroke-width="0.25"
            />
          </g>
          <g
            id="Dirt_Shading"
            data-name="Dirt Shading"
            transform="translate(-927 222)"
          >
            <path
              id="Path_283"
              data-name="Path 283"
              d="M1066.082,338.549l4.956.142"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_284"
              data-name="Path 284"
              d="M1066.224,339.524h4.855l2.8-.406"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_285"
              data-name="Path 285"
              d="M1070.51,339.686l-5.83,2.173,9.831-1.137-7.008,1.991h6.541"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_286"
              data-name="Path 286"
              d="M1067.158,344.683l6.784-.1"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_287"
              data-name="Path 287"
              d="M1070.774,347.019c.122.061,4.042.711,4.042.711l-3.88.833,2.62.366"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_288"
              data-name="Path 288"
              d="M1072.155,349.274l3.169.589-1.686.528"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_289"
              data-name="Path 289"
              d="M1073.536,350.391l4.2.569"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_290"
              data-name="Path 290"
              d="M1073.13,352.4l7.333.366"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_291"
              data-name="Path 291"
              d="M1073.618,354.006h7.5l-5.362.975,3.047.366-1.828.731,3.27.284-2.133.752,4.652.447"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_292"
              data-name="Path 292"
              d="M1087.344,369.714l2.334.652,1.476.275h3.57"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_293"
              data-name="Path 293"
              d="M1087.344,371.6h11.775"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_294"
              data-name="Path 294"
              d="M1094.188,371.75l-4.859,1.156,5.438.3-6.344,1.2,4.875.188-2.641.922,12.375-.922-13.062,2.641,11.734.156"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_295"
              data-name="Path 295"
              d="M1091.172,379.453l13.516-.969"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_296"
              data-name="Path 296"
              d="M1092.625,380.891l12.906-.234-10.078,1.25,5.531.281-6.641.719,13.875.5-10.406,1.375,10.3.156"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_297"
              data-name="Path 297"
              d="M1098.125,387.359l8.5.141"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_298"
              data-name="Path 298"
              d="M1101.313,388.438l6.344.125"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_299"
              data-name="Path 299"
              d="M1102.725,390.223l18.383-.244-15.945,1.239,13.508.792"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_300"
              data-name="Path 300"
              d="M1106.909,394.2H1124.3"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
            <path
              id="Path_301"
              data-name="Path 301"
              d="M1111.917,396.114l16.707.223-12.37,1.706,14.808.467"
              fill="none"
              stroke="#184194"
              stroke-width="0.5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Animation;

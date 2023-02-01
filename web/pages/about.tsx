import Container from "../components/Container";
//@ts-ignore
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col items-center text-center">
        <Fade up delay={1000} distance="24px">
          <div className="pt-24 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
            Our Mission
          </div>
        </Fade>
        <Fade up delay={1100} distance="24px">
          <div className="pt-6 font-bold text-5xl w-[50vw]">
            We accelerate the world’s most empathy-driven healthcare innovations
            by connecting and supporting diverse creators.
          </div>
        </Fade>
        <Fade up delay={1200} distance="24px">
          <div className="pt-6 opacity-50 text-lg w-[35vw]">
            Health is the quintessential human experience for all. Despite its
            importance, medical innovations have slowed while the world around
            us has and will continue to accelerate to new heights. We need a
            disruption in this heavily-guarded field to inspire hope in
            humanity.
          </div>
        </Fade>
        <Fade up delay={1500} distance="24px">
          <div className="pt-8 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#00B59D] to-[#CB47F4] ">{`health{hacks} is the revolution.`}</div>
        </Fade>
        <Fade delay={2000}>
          <div className="flex flex-col items-center justify-center text-center border-y-[0.5px] border-white border-opacity-25 mt-16 py-16 w-full ">
            <div className="font-semibold text-3xl opacity-50">
              Headquarters:
            </div>
            <div className="mt-4 font-semibold text-5xl">
              Stanford University
            </div>
            <div className="flex items-center space-x-16 mt-12 ">
              <div className="flex flex-col space-y-2 text-center">
                <div className="font-semibold text-6xl">38</div>
                <div className="font-medium opacity-50 text-lg">
                  TEAM MEMBERS
                </div>
              </div>
              <div className="border-l-2 border-white h-[125px] opacity-50" />
              <div className="flex flex-col space-y-2 text-center">
                <div className="font-semibold text-6xl">2020</div>
                <div className="font-medium opacity-50 text-lg">FOUNDED</div>
              </div>
            </div>
          </div>
        </Fade>
        <div className="pt-24 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
          We Have Been Backed By
        </div>
        <div className="grid grid-cols-3 gap-24 items-center mt-6">
          <img
            src="/logos/polygon.svg"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/clipboard-health.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/fund-global.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/vital.svg"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/flex-logistics.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/akasa.svg"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/futek.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/picnic-health.svg"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/akua.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/desimone.png"
            className="h-[25vh] filter brightness-0 invert"
          />
          <img
            src="/logos/wu-tsai.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/isono.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/elite.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/aws.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/gcp.png"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/moodfit logo.webp"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="/logos/sticker-giant.svg"
            className="h-[5vh] filter brightness-0 invert"
          />
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTVweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgOTUgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU0LjEgKDc2NDkwKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5VaVBhdGhfTG9nb19mdWxsPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAsMCBMMzIsMCBMMzIsMzIgTDAsMzIgTDAsMCBaIE0yOC42NzIsMjguNjcyIEwyOC42NzIsMy4zMjggTDMuMzI4LDMuMzI4IEwzLjMyOCwyOC42NzIgTDI4LjY3MiwyOC42NzIgTDI4LjY3MiwyOC42NzIgWiBNNi4yMDgsOC4yNTYgTDYuMjA4LDE3LjkyIEM2LjIwOCwyMi4zMzYgOC42NCwyNC45NiAxMi43MzYsMjQuOTYgQzE2Ljk2LDI0Ljk2IDE5LjM5MiwyMi4zMzYgMTkuMzkyLDE3LjkyIEwxOS4zOTIsOC4yNTYgTDE2LjA2NCw4LjI1NiBMMTYuMDY0LDE3LjkyIEMxNi4wNjQsMjAuNDE2IDE0Ljk3NiwyMS44MjQgMTIuOCwyMS44MjQgQzEwLjQ5NiwyMS44MjQgOS40NzIsMjAuMzUyIDkuNDcyLDE3LjkyIEw5LjQ3Miw4LjI1NiBMNi4yMDgsOC4yNTYgWiBNMjMuNjgsMTAuMjQgQzI0LjgzMiwxMC4yNCAyNS43MjgsOS40MDggMjUuNzI4LDguMjU2IEMyNS43MjgsNy4wNCAyNC44OTYsNi4yMDggMjMuNjgsNi4yMDggQzIyLjUyOCw2LjIwOCAyMS42MzIsNy4wNCAyMS42MzIsOC4yNTYgQzIxLjYzMiw5LjQwOCAyMi41MjgsMTAuMjQgMjMuNjgsMTAuMjQgWiBNMjIuMDE2LDExLjc3NiBMMjIuMDE2LDI0Ljc2OCBMMjUuMzQ0LDI0Ljc2OCBMMjUuMzQ0LDExLjc3NiBMMjIuMDE2LDExLjc3NiBaIE00MS44NTYsMTkuNDU2IEM0NS40NCwxOS40NTYgNDcuODA4LDE3LjM0NCA0Ny44MDgsMTMuODI0IEM0Ny44MDgsMTAuNDMyIDQ1LjUwNCw4LjI1NiA0MS44NTYsOC4yNTYgTDM1LjU4NCw4LjI1NiBMMzUuNTg0LDI0LjgzMiBMMzguOTEyLDI0LjgzMiBMMzguOTEyLDE5LjUyIEw0MS44NTYsMTkuNTIgTDQxLjg1NiwxOS40NTYgWiBNNDEuNDcyLDE2LjgzMiBMMzguODQ4LDE2LjgzMiBMMzguODQ4LDEwLjk0NCBMNDEuNDcyLDEwLjk0NCBDNDMuMzkyLDEwLjk0NCA0NC40MTYsMTIuMDMyIDQ0LjQxNiwxMy44MjQgQzQ0LjQxNiwxNS43NDQgNDMuMzkyLDE2LjgzMiA0MS40NzIsMTYuODMyIFogTTQ4Ljg5NiwxOC4zMDQgQzQ4Ljg5NiwyMi4yMDggNTEuMzkyLDI0Ljk2IDU0LjkxMiwyNC45NiBDNTcuMDI0LDI0Ljk2IDU4LjM2OCwyNC4xOTIgNTkuMTM2LDIyLjk3NiBMNTkuMTM2LDI0LjgzMiBMNjIuNDY0LDI0LjgzMiBMNjIuNDY0LDExLjc3NiBMNTkuMTM2LDExLjc3NiBMNTkuMTM2LDEzLjgyNCBDNTguMzA0LDEyLjQ4IDU2Ljk2LDExLjY0OCA1NC45MTIsMTEuNjQ4IEM1MS4zMjgsMTEuNjQ4IDQ4Ljg5NiwxNC40NjQgNDguODk2LDE4LjMwNCBaIE01OS4xMzYsMTguMzA0IEM1OS4xMzYsMjAuNTQ0IDU3LjcyOCwyMi4wMTYgNTUuNjgsMjIuMDE2IEM1My40NCwyMi4wMTYgNTIuMjg4LDIwLjQxNiA1Mi4yODgsMTguMzA0IEM1Mi4yODgsMTYgNTMuNTY4LDE0LjUyOCA1NS42OCwxNC41MjggQzU3Ljc5MiwxNC41MjggNTkuMTM2LDE2LjA2NCA1OS4xMzYsMTguMzA0IFogTTcwLjc4NCwyMS45NTIgQzY5LjUwNCwyMS45NTIgNjkuMTg0LDIxLjM3NiA2OS4xODQsMjAuMjI0IEw2OS4xODQsMTQuNTkyIEw3Mi4wNjQsMTQuNTkyIEw3Mi4wNjQsMTEuNzc2IEw2OS4xODQsMTEuNzc2IEw2OS4xODQsOC4xOTIgTDY1Ljg1Niw4LjE5MiBMNjUuODU2LDExLjc3NiBMNjQuMzIsMTEuNzc2IEw2NC4zMiwxNC41OTIgTDY1Ljg1NiwxNC41OTIgTDY1Ljg1NiwyMC4yMjQgQzY1Ljg1NiwyMy4yOTYgNjcuMiwyNC43NjggNzAuNCwyNC43NjggTDcyLjEyOCwyNC43NjggTDcyLjEyOCwyMS45NTIgTDcwLjc4NCwyMS45NTIgWiBNNzcuMjQ4LDEzLjYzMiBMNzcuMjQ4LDcuNDg4IEw3My45Miw3LjQ4OCBMNzMuOTIsMjQuODMyIEw3Ny4yNDgsMjQuODMyIEw3Ny4yNDgsMTcuOTIgQzc3LjI0OCwxNS42OCA3OC40LDE0LjMzNiA4MC4zODQsMTQuMzM2IEM4Mi4zMDQsMTQuMzM2IDgzLjMyOCwxNS42MTYgODMuMzI4LDE3LjYgTDgzLjMyOCwyNC43NjggTDg2LjY1NiwyNC43NjggTDg2LjY1NiwxNy4yOCBDODYuNjU2LDEzLjg4OCA4NC4yMjQsMTEuNjQ4IDgxLjE1MiwxMS42NDggQzc5LjIzMiwxMS42NDggNzguMDE2LDEyLjM1MiA3Ny4yNDgsMTMuNjMyIFogTTg2LjQsNy40MjQgTDg2LjQsNy45MzYgTDg3LjQ4OCw3LjkzNiBMODcuNDg4LDExLjI2NCBMODguMTI4LDExLjI2NCBMODguMTI4LDcuOTM2IEw4OS4xNTIsNy45MzYgTDg5LjE1Miw3LjQyNCBDODkuMTUyLDcuNDI0IDg2LjQsNy40MjQgODYuNCw3LjQyNCBaIE05My4zMTIsNy40MjQgTDkxLjk2OCwxMC40OTYgTDkwLjY4OCw3LjQyNCBMODkuOTIsNy40MjQgTDg5LjkyLDExLjI2NCBMOTAuNDk2LDExLjI2NCBMOTAuNDk2LDguMzIgTDkxLjc3NiwxMS4yNjQgTDkyLjIyNCwxMS4yNjQgTDkzLjQ0LDguMzIgTDkzLjQ0LDExLjI2NCBMOTQuMDE2LDExLjI2NCBMOTQuMDE2LDcuNDI0IEw5My4zMTIsNy40MjQgTDkzLjMxMiw3LjQyNCBaIiBpZD0iVWlQYXRoX0xvZ29fZnVsbCIgZmlsbD0iI0ZBNDYxNiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
            className="h-[5vh] filter brightness-0 invert"
          />
        </div>

        <div className="pt-24 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
          We Believe In
        </div>
        <div className="flex flex-col mt-8 space-y-4 text-2xl opacity-75">
          <div>(1) We are all different and that’s why we need you.</div>
          <div>
            (2) We aim for first class performance and only in a first class
            way.
          </div>
          <div>
            (3) We build durable relationships that last the test of time.
          </div>
          <div>(4) We push the team forward and dream big together.</div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default About;

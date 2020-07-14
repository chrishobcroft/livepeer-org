/** @jsx jsx */
import { useRef, useEffect } from "react"
import { jsx, Container, Heading, Text, Box, Link as A } from "theme-ui"
import Divider from "components/primitives/divider"
import { gsap } from "gsap"
import { DURATION } from "lib/animations"

const HomeHero = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    if (!sectionRef.current) return
    const tl = gsap.timeline()
    tl.set(sectionRef.current, {
      autoAlpha: 0
    })

    // @ts-ignore
    tl.sectionEntrance(sectionRef.current)
  }, [sectionRef])
  return (
    <Box sx={{ bg: "muted" }}>
      <Container
        className="hide__section"
        ref={sectionRef}
        variant="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 5
        }}
      >
        <Box sx={{ maxWidth: "4xl", mb: ["32px", "40px"] }}>
          <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
            The&nbsp;
            <Text
              as="span"
              sx={{
                pr: ["2px", "4px"], // Fix text being clipped
                background: ({ colors }) =>
                  `linear-gradient(90deg, #00A55F 0%, ${colors.gradient.mid} 100%)`,
                variant: "text.gradientBase"
              }}
            >
              World's
            </Text>{" "}
            <Text
              as="span"
              sx={{
                background: ({ colors }) =>
                  `linear-gradient(90deg, ${colors.gradient.mid} 0%, #4CF1AC 100%)`,
                variant: "text.gradientBase"
              }}
            >
              open&nbsp;
            </Text>
            <br sx={{ display: ["none", null, "block"] }} />
            Video Infrastructure
          </Heading>
          <Divider isTransparent isVertical size={["12px", "16px", "24px"]} />
          <Heading variant="section.subtitle">
            Livepeer is a decentralized, blockchain-based video protocol
            powering live and on-demand streaming at unbeatable cost, with
            unparalleled reliability, and unlimited scalability.
          </Heading>
        </Box>
        <A variant="buttons.primary" href="/#get-started">
          Get started
        </A>
        <Box
          sx={{ bg: "ultraLightGray", height: "500px", width: "100%", my: 4 }}
        />
      </Container>
    </Box>
  )
}

export default HomeHero

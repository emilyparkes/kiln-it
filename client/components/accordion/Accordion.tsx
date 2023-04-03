import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'

interface Props {
  title: any,
  children: any,
  num: any,
  currentAccordian: any,
  openAccordian: any,
}

function AnAccordion({
  title,
  children,
  num,
  currentAccordian,
  openAccordian,
}: Props) {
  return (
    <Accordion
      expanded={currentAccordian === `panel${num}`}
      onChange={() => openAccordian(`panel${num}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${num}bh-content`}
        id={`panel${num}bh-header`}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}

export default AnAccordion

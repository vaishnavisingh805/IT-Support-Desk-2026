import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Tooltip,
} from "@fluentui/react-components";
import { InfoRegular } from "@fluentui/react-icons";

export default function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Tooltip content="About this project" relationship="label">
          <Button
            appearance="subtle"
            icon={<InfoRegular />}
            aria-label="About this project"
          />
        </Tooltip>
      </DialogTrigger>

      <DialogSurface>
        <DialogBody>
          <DialogTitle>About IT Support Desk</DialogTitle>

          <DialogContent>
            <p>
              IT Support Desk is an incident and ticket management
              application designed to organize internal IT support
              requests and keep issues moving toward resolution.
            </p>

            <p>
              The application supports ticket creation, categorization,
              priority-based incident handling, status tracking, and
              separate workflows for service desk users and team members.
            </p>

            <p>
              Support requests can be categorized into Hardware,
              Networking, Software, User Authentication, Audio / Video,
              and Other, with priorities ranging from Low to Critical.
            </p>

            <p>
              The project was customized using React, TypeScript, Vite,
              and Fluent UI, with browser-based storage used for the
              demonstration workflow.
            </p>
          </DialogContent>

          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="primary">Close</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
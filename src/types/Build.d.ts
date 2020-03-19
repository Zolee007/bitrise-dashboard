import { App } from "./App";
import { Response } from "./Response";

export type BuildResponse = Response<Build[]>;

export type Build = {
  slug: string;
  repository: App;
  status: integer;
  status_text: string;
  build_number: number;
  triggered_by: string;
  triggered_workflow: string;
  original_build_params: OriginalBuildParams;
  branch: string;
  commit_hash: string | null;
  commit_message: string | null;
  commit_view_url: string | null;
  pull_request_id: integer;
  pull_request_target_branch: string | null;
  pull_request_view_url: string | null;
  environment_prepare_finished_at: string | null;
  started_on_worker_at: string | null;
  triggered_at: string | null;
  finished_at: string | null;
  abort_reason: string | null;
  is_on_hold: boolean;
  machine_type_id: string | null;
  stack_identifier: string | null;
  tag: string | null;
};

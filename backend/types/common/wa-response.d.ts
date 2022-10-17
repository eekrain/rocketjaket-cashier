interface MyWAGetAuthStatusOutput {
  is_authenticated: boolean;
  is_qr_ready: boolean;
  is_client_ready: boolean;
  state: WAState;
  qrcode?: string;
  info?: ClientInfo;
}

interface MyWASignoutResponse {
  is_success: boolean;
  errorMessage?: string;
}

enum WAStateEnum {
  CONFLICT = "CONFLICT",
  CONNECTED = "CONNECTED",
  DEPRECATED_VERSION = "DEPRECATED_VERSION",
  OPENING = "OPENING",
  PAIRING = "PAIRING",
  PROXYBLOCK = "PROXYBLOCK",
  SMB_TOS_BLOCK = "SMB_TOS_BLOCK",
  TIMEOUT = "TIMEOUT",
  TOS_BLOCK = "TOS_BLOCK",
  UNLAUNCHED = "UNLAUNCHED",
  UNPAIRED = "UNPAIRED",
  UNPAIRED_IDLE = "UNPAIRED_IDLE",
}

type WAStateOptions = keyof typeof WAStateEnum;

interface ClientInfo {
  /**
   * Current user ID
   * @deprecated Use .wid instead
   */
  me: ContactId;
  /** Current user ID */
  wid: ContactId;
  /**
   * Information about the phone this client is connected to.  Not available in multi-device.
   * @deprecated
   */
  phone: ClientInfoPhone;
  /** Platform the phone is running on */
  platform: string;
  /** Name configured to be shown in push notifications */
  pushname: string;

  /** Get current battery percentage and charging status for the attached device */
  getBatteryStatus: () => Promise<BatteryInfo>;
}

interface ContactId {
  server: string;
  user: string;
  _serialized: string;
}

interface ClientInfoPhone {
  /** WhatsApp Version running on the phone */
  wa_version: string;
  /** OS Version running on the phone (iOS or Android version) */
  os_version: string;
  /** Device manufacturer */
  device_manufacturer: string;
  /** Device model */
  device_model: string;
  /** OS build number */
  os_build_number: string;
}

interface BatteryInfo {
  /** The current battery percentage */
  battery: number;
  /** Indicates if the phone is plugged in (true) or not (false) */
  plugged: boolean;
}

console.log(global);
console.log(process);

/*


"global" is a main object() in node same as "window" object in browser
"process"  is a object() in node same as "documnet" which comes under global


------------------------------------------------------------------------------
--->>> global object .......................................................

$ node processInNode.js
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 115.2736000046134,
      nodeStart: 0.8422000035643578,
      v8Start: 3.2723000049591064,
      bootstrapComplete: 28.502599999308586,
      environment: 15.254000000655651,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1643950985157.416
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}



------------------------------------------------------------------------------
--->>> process object ........................................................

$ node processInNode.js
process {
  version: 'v16.13.0',
  versions: {
    node: '16.13.0',
    v8: '9.4.146.19-node.13',
    uv: '1.42.0',
    zlib: '1.2.11',
    brotli: '1.0.9',
    ares: '1.17.2',
    modules: '93',
    nghttp2: '1.45.1',
    napi: '8',
    llhttp: '6.0.4',
    openssl: '1.1.1l+quic',
    cldr: '39.0',
    icu: '69.1',
    tz: '2021a',
    unicode: '13.0',
    ngtcp2: '0.1.0-DEV',
    nghttp3: '0.1.0-DEV'
  },
  arch: 'x64',
  platform: 'win32',
  release: {
    name: 'node',
    lts: 'Gallium',
    sourceUrl: 'https://nodejs.org/download/release/v16.13.0/node-v16.13.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v16.13.0/node-v16.13.0-headers.tar.gz',
    libUrl: 'https://nodejs.org/download/release/v16.13.0/win-x64/node.lib'
  },
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [
    'Internal Binding native_module',
    'Internal Binding errors',
    'NativeModule internal/errors',
    'Internal Binding config',
    'Internal Binding constants',
    'Internal Binding util',
    'Internal Binding types',
    'NativeModule internal/util',
    'NativeModule internal/util/types',
    'NativeModule internal/assert',
    'NativeModule internal/validators',
    'Internal Binding icu',
    'NativeModule internal/util/inspect',
    'NativeModule events',
    'Internal Binding buffer',
    'Internal Binding string_decoder',
    'NativeModule internal/buffer',
    'Internal Binding blob',
    'NativeModule internal/encoding',
    'Internal Binding symbols',
    'Internal Binding messaging',
    'NativeModule internal/worker/js_transferable',
    'NativeModule internal/blob',
    'NativeModule buffer',
    'NativeModule internal/process/per_thread',
    'Internal Binding process_methods',
    'Internal Binding credentials',
    'Internal Binding async_wrap',
    'Internal Binding task_queue',
    'NativeModule internal/async_hooks',
    'NativeModule async_hooks',
    'NativeModule internal/process/promises',
    'NativeModule internal/fixed_queue',
    'NativeModule internal/process/task_queues',
    'Internal Binding trace_events',
    'NativeModule internal/constants',
    'NativeModule internal/console/constructor',
    'NativeModule internal/console/global',
    'NativeModule internal/util/inspector',
    'Internal Binding inspector',
    'NativeModule internal/querystring',
    'NativeModule path',
    'NativeModule querystring',
    'Internal Binding url',
    'NativeModule internal/url',
    'NativeModule internal/util/debuglog',
    'NativeModule util',
    'Internal Binding performance',
    'NativeModule internal/perf/utils',
    'NativeModule internal/event_target',
    'NativeModule internal/abort_controller',
    'Internal Binding worker',
    'NativeModule internal/streams/end-of-stream',
    'NativeModule internal/streams/destroy',
    'NativeModule internal/streams/legacy',
    'NativeModule internal/streams/add-abort-signal',
    'NativeModule internal/streams/buffer_list',
    'NativeModule internal/streams/state',
    'NativeModule string_decoder',
    'NativeModule internal/streams/from',
    'NativeModule internal/streams/readable',
    'NativeModule internal/streams/writable',
    'NativeModule internal/streams/duplex',
    'NativeModule internal/streams/utils',
    'NativeModule internal/streams/pipeline',
    'NativeModule internal/streams/compose',
    'NativeModule stream/promises',
    'NativeModule internal/streams/transform',
    'NativeModule internal/streams/passthrough',
    'NativeModule stream',
    'NativeModule internal/worker/io',
    'Internal Binding timers',
    'NativeModule internal/linkedlist',
    'NativeModule internal/priority_queue',
    'NativeModule internal/timers',
    'NativeModule timers',
    'NativeModule internal/perf/performance_entry',
    'NativeModule internal/perf/observe',
    'NativeModule internal/perf/nodetiming',
    'NativeModule internal/perf/usertiming',
    'NativeModule internal/perf/event_loop_utilization',
    'NativeModule internal/histogram',
    'NativeModule internal/perf/timerify',
    'NativeModule internal/perf/performance',
    'NativeModule internal/perf/event_loop_delay',
    'NativeModule perf_hooks',
    'NativeModule internal/process/execution',
    'NativeModule internal/process/warning',
    'Internal Binding fs',
    'NativeModule internal/fs/utils',
    'Internal Binding fs_dir',
    'NativeModule internal/fs/dir',
    'Internal Binding fs_event_wrap',
    'Internal Binding uv',
    'NativeModule internal/fs/watchers',
    'NativeModule internal/fs/read_file_context',
    'NativeModule fs',
    'Internal Binding serdes',
    'Internal Binding profiler',
    'Internal Binding heap_utils',
    ... 48 more items
  ],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype] {
    newListener: [Function: startListeningIfSignal],
    removeListener: [Function: stopListeningIfSignal],
    warning: [Function: onWarning],
    SIGWINCH: [Function (anonymous)]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  domain: null,
  _exiting: false,
  config: [Getter/Setter],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
  kill: [Function: kill],
  exit: [Function: exit],
  openStdin: [Function (anonymous)],
  allowedNodeEnvironmentFlags: [Getter/Setter],
  assert: [Function: deprecated],
  features: {
    inspector: true,
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true,
    cached_builtins: [Getter]
  },
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  env: {
    ACLOCAL_PATH: '/mingw64/share/aclocal:/usr/share/aclocal',
    ALLUSERSPROFILE: 'C:\\ProgramData',
    APPDATA: 'C:\\Users\\Shivam Chaurasiya\\AppData\\Roaming',
    COMMONPROGRAMFILES: 'C:\\Program Files\\Common Files',
    'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
    CommonProgramW6432: 'C:\\Program Files\\Common Files',
    COMPUTERNAME: 'LAPTOP-5Q40PNTL',
    COMSPEC: 'C:\\WINDOWS\\system32\\cmd.exe',
    CONFIG_SITE: '/etc/config.site',
    DISPLAY: 'needs-to-be-defined',
    DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
    EXEPATH: 'C:\\Program Files\\Git',
    FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
    FPS_BROWSER_USER_PROFILE_STRING: 'Default',
    HOME: 'C:\\Users\\Shivam Chaurasiya',
    HOMEDRIVE: 'C:',
    HOMEPATH: '\\Users\\Shivam Chaurasiya',
    HOSTNAME: 'LAPTOP-5Q40PNTL',
    INFOPATH: '/usr/local/info:/usr/share/info:/usr/info:/share/info',
    'IntelliJ IDEA Community Edition': 'C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2021.2.2\\bin;',
    LC_CTYPE: 'en_US.UTF-8',
    LOCALAPPDATA: 'C:\\Users\\Shivam Chaurasiya\\AppData\\Local',
    LOGONSERVER: '\\\\LAPTOP-5Q40PNTL',
    MANPATH: '/mingw64/local/man:/mingw64/share/man:/usr/local/man:/usr/share/man:/usr/man:/share/man',
    MINGW_CHOST: 'x86_64-w64-mingw32',
    MINGW_PACKAGE_PREFIX: 'mingw-w64-x86_64',
    MINGW_PREFIX: '/mingw64',
    MSYSTEM: 'MINGW64',
    MSYSTEM_CARCH: 'x86_64',
    MSYSTEM_CHOST: 'x86_64-w64-mingw32',
    MSYSTEM_PREFIX: '/mingw64',
    NUMBER_OF_PROCESSORS: '8',
    NVM_CD_FLAGS: '',
    NVM_DIR: '/c/Users/Shivam Chaurasiya/.nvm',
    NVM_RC_VERSION: '',
    OLDPWD: '/c/Users/Shivam Chaurasiya',
    OneDrive: 'C:\\Users\\Shivam Chaurasiya\\OneDrive',
    ORIGINAL_PATH: 'C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Shivam Chaurasiya\\bin;C
:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:
\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\dotnet;C:\\Program Files\\Git\
\cmd;C:\\Program Files\\nodejs;C:\\Program Files\\Java\\jdk1.8.0_321\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\
Users\\Shivam Chaurasiya\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Shivam Chaurasiya\\AppData\\Local\\Programs\\Micr
osoft VS Code\\bin;C:\\MinGW\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2021.2.2\\bin;C:\\Users\\Shiv
am Chaurasiya\\.jdks\\openjdk-17\\bin;C:\\Users\\Shivam Chaurasiya\\AppData\\Local\\atom\\bin;C:\\Users\\Shivam Chaurasiya\\A
ppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Shivam Chaurasiya\\AppData\\Local\\Programs\\Hyper\\resources\\bin;C:\\Users
\\Shivam Chaurasiya\\AppData\\Roaming\\npm;C:\\Program Files\\heroku\\bin',
    ORIGINAL_TEMP: '/tmp',
    ORIGINAL_TMP: '/tmp',
    OS: 'Windows_NT',
    PATH: 'C:\\Users\\Shivam Chaurasiya\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\
\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\u
sr\\bin;C:\\Users\\Shivam Chaurasiya\\bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32
;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Pr
ogram Files\\dotnet;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs;C:\\Program Files\\Java\\jdk1.8.0_321\\bin;C:\\Prog
ram Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\Shivam Chaurasiya\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Shivam
 Chaurasiya\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\MinGW\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Comm
unity Edition 2021.2.2\\bin;C:\\Users\\Shivam Chaurasiya\\.jdks\\openjdk-17\\bin;C:\\Users\\Shivam Chaurasiya\\AppData\\Local
\\atom\\bin;C:\\Users\\Shivam Chaurasiya\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Shivam Chaurasiya\\AppData\\Local
\\Programs\\Hyper\\resources\\bin;C:\\Users\\Shivam Chaurasiya\\AppData\\Roaming\\npm;C:\\Program Files\\heroku\\bin;C:\\Prog
ram Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl',
    PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
    PKG_CONFIG_PATH: '/mingw64/lib/pkgconfig:/mingw64/share/pkgconfig',
    PLINK_PROTOCOL: 'ssh',
    PROCESSOR_ARCHITECTURE: 'AMD64',
    PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 142 Stepping 10, GenuineIntel',
    PROCESSOR_LEVEL: '6',
    PROCESSOR_REVISION: '8e0a',
    ProgramData: 'C:\\ProgramData',
    PROGRAMFILES: 'C:\\Program Files',
    'ProgramFiles(x86)': 'C:\\Program Files (x86)',
    ProgramW6432: 'C:\\Program Files',
    PS1: '\\[\\033]0;$TITLEPREFIX:$PWD\\007\\]\\n\\[\\033[32m\\]\\u@\\h \\[\\033[35m\\]$MSYSTEM \\[\\033[33m\\]\\w\\[\\033[36
m\\]`__git_ps1`\\[\\033[0m\\]\\n$ ',
    PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
    PUBLIC: 'C:\\Users\\Public',
    PWD: '/c/Users/Shivam Chaurasiya/Desktop/Node.js',
    SESSIONNAME: 'Console',
    SHELL: 'C:\\Program Files\\Git\\usr\\bin\\bash.exe',
    SHLVL: '1',
    SSH_ASKPASS: '/mingw64/bin/git-askpass.exe',
    SYSTEMDRIVE: 'C:',
    SYSTEMROOT: 'C:\\WINDOWS',
    TEMP: 'C:\\Users\\SHIVAM~1\\AppData\\Local\\Temp',
    TERM_PROGRAM: 'mintty',
    TERM_PROGRAM_VERSION: '3.5.0',
    TMP: 'C:\\Users\\SHIVAM~1\\AppData\\Local\\Temp',
    TMPDIR: 'C:\\Users\\SHIVAM~1\\AppData\\Local\\Temp',
    USERDOMAIN: 'LAPTOP-5Q40PNTL',
    USERDOMAIN_ROAMINGPROFILE: 'LAPTOP-5Q40PNTL',
    USERNAME: 'Shivam Chaurasiya',
    USERPROFILE: 'C:\\Users\\Shivam Chaurasiya',
    WINDIR: 'C:\\WINDOWS',
    ZES_ENABLE_SYSMAN: '1',
    _: '/usr/bin/winpty',
    __COMPAT_LAYER: 'DetectorsShimLog'
  },
  title: ' ',
  argv: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js\\processInNode.js'
  ],
  execArgv: [],
  pid: 2776,
  ppid: 14352,
  execPath: 'C:\\Program Files\\nodejs\\node.exe',
  debugPort: 9229,
  hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
  argv0: 'C:/Program Files/nodejs/node.exe',
  _preload_modules: [],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  mainModule: Module {
    id: '.',
    path: 'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js',
    exports: {},
    filename: 'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js\\processInNode.js',
    loaded: false,
    children: [],
    paths: [
      'C:\\Users\\Shivam Chaurasiya\\Desktop\\Node.js\\node_modules',
      'C:\\Users\\Shivam Chaurasiya\\Desktop\\node_modules',
      'C:\\Users\\Shivam Chaurasiya\\node_modules',
      'C:\\Users\\node_modules',
      'C:\\node_modules'
    ]
  },
  [Symbol(kCapture)]: false
}



*/

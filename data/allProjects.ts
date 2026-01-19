import { featuredProjects } from './featuredProjects'
import type { Project } from './types'

export const allProjects: Project[] = [
  ...featuredProjects.map(project => ({
    title: project.title,
    slug: project.slug,
    authors: project.authors,
    description: project.description,
    images: project.gallery || [project.image],
    tags: project.techStack,
    status: project.status,
    metrics: project.metrics,
    actions: project.actions,
  })),
  {
    title: 'TaskMaster Pro',
    authors: [],
    description:
      "Productivity suite leveraging Flutter's platform channels for native integration and local notifications.",
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlGPS5J1bUJlCd6uQyRJ7cytqkG6I3izq3NioDMHVEhurJfV-OHp5veyyZOMV7mRgI3p2lCPBH4IVH8tzx7VTDn7JQyhNt3W2P74iKgVpP4kymBaUS9SfKzFHsWH9S_yxbHljuSNprHtTNGHn24Q9mQbXo5J7Oy5_AkwtGGQWFQ84P8MBKxATyWR-ShAafpJaQdU89qEY1KOCXimmcdrDYce4FZlhtK_nPwE1cLVhE-9LE-Hs4X_JeAZCX6HCy1JyGdXyb2WrI4Vs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSR7kKbcurD7XH-Clb9PDrBki23-4t8mvakeb1LPSkPlA8sdVXsQQkFYuD7TagIWDoXQnULqLe5zJQOKC7Cs1aNpEVzWiFmloElBuMB3grf4LXEhew7CILtLZWh_om0DRrd8QSeFuF7lOKTxDxqliN4EHBWlyuy1TwipMJPVLryhIBoFX2pvxztiVaeFGagvWYE5GQ1Q5bIJVQiPIlOrFmuKjsFtDXi6He54L7sgYqg2vYww-jeTUGlMaVWK6NcglAUdmg0UacFao',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWYxyyKREpGwOqxPKnE0l0OQJp1mAqmXHbg_ZiYnYT97P4wlnNEmgzorCEk1qDhyY-myy_wFXwcQTFtRrN0aSsls273oAgEftUfiSG4rHO_K-C-JyVMQl6fBXHJFJTg9LxDubR0Emw4xHPVFlSJFB0Y14Z8GDAeHRfyUnYwF_z5egNoo-9AKjncRdWBy0Z5XOpLEn47x3iob7b8S8M75C14Wn5TM2WZVCWE1wdmuFCv8YlmA_VfPP7UAYYcTCwJIvnZQTIdwIdFB4',
    ],
    tags: ['Clean Architecture', 'Hive DB', 'Platform Channels'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
  {
    title: 'CryptoWallet X',
    authors: [],
    description: 'Secure, non-custodial wallet with real-time websocket updates and biometric authentication.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYieosSjwoLJjC1WWH7GMtfQNx-OZSErJ1T5tFmkc7TA76mXjUpOdGAm5nIS0UMwCSauz_0b6nYQ0ltVLWk5pYxkuCiArfCXNUldrwIdivcmiIRy9f7StsRPI_ZIlguRiXhtrSV5BaTrNnzefBnLH8X80Pkx5iQshyxfup1THEdI33EMLO4K66tIK9jI0oXEwtbc41YG3JXGmbI-CLb__DFzWaN46FLdV9OARbyjID2UXoqvbWbIWrVDbYy16pKUr7jskbX1F7zRQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaB-3RH1_XogKHseFzazRO7EVpnm0o8_dIU85WjLt2EP2QnNe7n4WUWz0q4IP4CTVXBkLR58wThPqtTjCCioZYMiEqN1kKZwIECeLs5Uz14W4eHO80BMQtunrwd45-7UZCpI8y0OzfOTZl6Zk-R-I9GpD10JSSU6NdjjMuRYjoLUEy37F9WepqDSP4moKIowpoFhYm5ooDpe7Q-zu3BHTooV6IDXUf4Ob9KW22Ngo9sAFmI3RJ-faKA9keRz1gK5WAviaLNVdfg1k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA88Uyx2SGV-D5o6bHmPnTyhzJeMNmYyASs4gly6OIVkj_PRIOwzyXmVqcwoqlfDxYkfQ9wikha2QtuPWOfYZ3lb6h-AnyFr_9yd2Nl-jUkMuALtAa5hgV6iZFnPDoSOx7pz001GvifD2BdnvFWMVPXvrEOCM6SbgSWSYQdTpDhJxrdGQ1cviZvll5LZPhIPkgyjb5fOW22VGsicBDeQxfIgKOs97kifB6Gaxj4hMn9q5TONkezcUlRnJZuNKb039UWuT3KyAB8-tE',
    ],
    tags: ['WebSockets', 'Biometrics', 'Encryption'],
    categories: ['iOS', 'Android'],
  },
]
